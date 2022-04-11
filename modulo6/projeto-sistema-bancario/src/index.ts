import express, { Request, Response, Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { Conta, DadosUsuario, Extrato, Transacao, usuarios } from "./data"
import { verificaIdade } from "./utils/valida-idade"
import { Errors } from "./errors"
import { gerarDataAtual } from "./utils/gera-data-atual"
import { calcularTransacoes } from "./utils/calcula-transacoes"

const app: Express = express()
app.use(express.json())
app.use(cors())

// Mostra todas as contas
app.get("/usuarios", (request: Request, response: Response) => {
    response.status(200).send(usuarios)
})

// Mostra saldo da conta de determinado cpf
app.get("/usuarios/:cpf", (request: Request, response: Response) => {
    try {
        const cpf: string = request.params.cpf

        const usuario: Conta | undefined = usuarios.find(
            (usuario) => cpf === usuario.cpf.replace("-", ".").split(".").join("")
        )

        if (!usuario) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        const saldo = usuario.saldo

        response.status(200).send({ saldo })
    } catch (error: any) {
        switch (error.message) {
            case Errors.USER_NOT_FOUND.message:
                response.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

// Cria uma conta nova
app.post("/usuarios", (request: Request, response: Response) => {
    try {
        const { nome, cpf, dataDeNascimento }: DadosUsuario = request.body

        if (!verificaIdade(dataDeNascimento)) {
            throw new Error(Errors.UNAUTHORIZED.message)
        }

        const verificaCpf = usuarios.find((usuario) => usuario.cpf === cpf)

        if (verificaCpf) {
            throw new Error(Errors.USER_ALREADY_EXISTS.message)
        }

        const novoUsuario: Conta = {
            nome,
            cpf,
            dataDeNascimento,
            saldo: 0,
            extrato: [],
        }

        usuarios.push(novoUsuario)

        response.status(201).send("Conta criada.")
    } catch (error: any) {
        switch (error.message) {
            case Errors.UNAUTHORIZED.message:
                response.status(Errors.UNAUTHORIZED.status).send(Errors.UNAUTHORIZED.message)
                break
            case Errors.USER_ALREADY_EXISTS.message:
                response
                    .status(Errors.USER_ALREADY_EXISTS.status)
                    .send(Errors.USER_ALREADY_EXISTS.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

// Faz um deposito em determinado cpf
app.post("/usuarios/:cpf/:nome/deposito", (request: Request, response: Response) => {
    try {
        const { cpf, nome } = request.params
        const { valor } = request.body

        const usuario: Conta | undefined = usuarios.find(
            (usuario) =>
                usuario.nome === nome && usuario.cpf.replace("-", ".").split(".").join("") === cpf
        )

        if (!usuario) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        const data = gerarDataAtual()

        const novaTransacao: Extrato = {
            valor,
            data,
            descricao: Transacao.DEPOSITO,
        }

        usuario.extrato.push(novaTransacao)
        usuario.saldo += valor

        response.status(200).send(usuario)
    } catch (error: any) {
        switch (error.message) {
            case Errors.USER_NOT_FOUND.message:
                response.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

// Faz uma transferencia entre contas
app.post("/usuarios/:cpf/:nome/transferencia", (request: Request, response: Response) => {
    try {
        const { cpf, nome } = request.params
        const { cpfTransferencia, nomeTransferencia, valor } = request.body

        const usuario: Conta | undefined = usuarios.find(
            (usuario) =>
                usuario.nome === nome && usuario.cpf.replace("-", ".").split(".").join("") === cpf
        )

        if (!usuario) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        const usuarioTransferencia: Conta | undefined = usuarios.find(
            (usuario) => usuario.nome === nomeTransferencia && usuario.cpf === cpfTransferencia
        )

        if (!usuarioTransferencia) {
            throw new Error(Errors.USER_FOR_TRANSFER_NOT_FOUND.message)
        }

        if (usuario.saldo < valor) {
            throw new Error(Errors.INSUFFICIENT_BALANCE.message)
        }

        const data = gerarDataAtual()

        const transferenciaSaida: Extrato = {
            valor,
            data,
            descricao: Transacao.TRANSFERENCIA_SAIDA,
        }

        const transferenciaEntrada: Extrato = {
            valor,
            data,
            descricao: Transacao.TRANSFERENCIA_ENTRADA,
        }

        usuario.extrato.push(transferenciaSaida)
        usuarioTransferencia.extrato.push(transferenciaEntrada)

        response.status(200).send(transferenciaSaida)
    } catch (error: any) {
        switch (error.message) {
            case Errors.USER_NOT_FOUND.message:
                response.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
                break
            case Errors.USER_FOR_TRANSFER_NOT_FOUND.message:
                response
                    .status(Errors.USER_FOR_TRANSFER_NOT_FOUND.status)
                    .send(Errors.USER_FOR_TRANSFER_NOT_FOUND.message)
                break
            case Errors.INSUFFICIENT_BALANCE.message:
                response
                    .status(Errors.INSUFFICIENT_BALANCE.status)
                    .send(Errors.INSUFFICIENT_BALANCE.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

// Faz um pagamento
app.post("/usuarios/:cpf/pagamento", (request: Request, response: Response) => {
    try {
        const cpf = request.params.cpf
        const data = request.body.data || gerarDataAtual()
        const valor = request.body.valor

        const usuario: Conta | undefined = usuarios.find(
            (usuario) => usuario.cpf.replace("-", ".").split(".").join("") === cpf
        )

        if (!usuario) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        const dataAtual = new Date(gerarDataAtual().split("/").reverse().join("/"))
        const dataPagamento = new Date(data.split("/").reverse().join("/"))

        if (dataPagamento < dataAtual) {
            throw new Error(Errors.INVALID_PARAMETERS.message)
        }

        if (valor > usuario.saldo) {
            throw new Error(Errors.INSUFFICIENT_BALANCE.message)
        }

        const debito: Extrato = {
            valor,
            data,
            descricao: Transacao.DEBITO,
        }

        usuario.extrato.push(debito)

        response.status(200).send(usuario)
    } catch (error: any) {
        switch (error.message) {
            case Errors.USER_NOT_FOUND.message:
                response.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
                break
            case Errors.INVALID_PARAMETERS.message:
                response
                    .status(Errors.INVALID_PARAMETERS.status)
                    .send(Errors.INVALID_PARAMETERS.message)
                break
            case Errors.INSUFFICIENT_BALANCE.message:
                response
                    .status(Errors.INSUFFICIENT_BALANCE.status)
                    .send(Errors.INSUFFICIENT_BALANCE.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})


//Atualiza o saldo de determinado cpf
app.put("/usuarios/:cpf/saldo", (request: Request, response: Response) => {
    try {
        const { cpf } = request.params

        let usuario: Conta | undefined = usuarios.find(
            (usuario) => usuario.cpf.replace("-", ".").split(".").join("") === cpf
        )

        if (!usuario) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        const totalPagamentos = calcularTransacoes(usuario, Transacao.DEBITO)
        const totalSaidas = calcularTransacoes(usuario, Transacao.TRANSFERENCIA_SAIDA)
        const totalEntradas = calcularTransacoes(usuario, Transacao.TRANSFERENCIA_ENTRADA)

        const saldo = usuario.saldo + totalEntradas - (totalPagamentos + totalSaidas)

        const indexUsuario = usuarios.findIndex((usuario) => usuario.cpf.replace("-", ".").split(".").join("") === cpf)

        usuario = {...usuario, saldo: saldo}
        usuarios.splice(indexUsuario, 1, usuario)
        response.status(200).send(usuarios)
    } catch (error: any) {
        switch (error.message) {
            case Errors.USER_NOT_FOUND.message:
                response.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
