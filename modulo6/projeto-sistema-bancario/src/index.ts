import express, { Request, Response, Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { Conta, DadosUsuario, Extrato, usuarios } from "./data"
import { verificaIdade } from "./utils/valida-idade"
import { Errors } from "./errors"

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/usuarios", (request: Request, response: Response) => {
    response.status(200).send(usuarios)
})

app.get("/usuarios/:cpf", (request: Request, response: Response) => {
    try {
        const cpf: string = request.params.cpf

        const usuario: Conta | undefined = usuarios.find(
            (usuario) =>
                cpf === usuario.cpf.replace("-", ".").split(".").join("")
        )

        if (!usuario) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        const saldo = usuario.saldo

        response.status(200).send({ saldo })
    } catch (error: any) {
        switch (error.message) {
            case Errors.USER_NOT_FOUND.message:
                response
                    .status(Errors.USER_NOT_FOUND.status)
                    .send(Errors.USER_NOT_FOUND.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

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
                response
                    .status(Errors.UNAUTHORIZED.status)
                    .send(Errors.UNAUTHORIZED.message)
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

app.post("/usuarios/:cpf/:nome", (request: Request, response: Response) => {
    try {
        const { cpf, nome } = request.params
        const { valor, descricao } = request.body

        const usuario: Conta | undefined = usuarios.find(
            (usuario) =>
                usuario.nome === nome &&
                usuario.cpf.replace("-", ".").split(".").join("") === cpf
        )

        if (!usuario) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        const data = {
            dia: String(new Date().getDate()).padStart(2, "0"),
            mes: String(new Date().getMonth() + 1).padStart(2, "0"),
            ano: String(new Date().getFullYear()),
        }

        const novaTransacao: Extrato = {
            valor,
            data: `${data.dia}/${data.mes}/${data.ano}`,
            descricao,
        }

        usuario.extrato.push(novaTransacao)
        usuario.saldo += novaTransacao.valor

        response.status(200).send(usuario)
    } catch (error: any) {
        switch (error.message) {
            case Errors.USER_NOT_FOUND.message:
                response
                    .status(Errors.USER_NOT_FOUND.status)
                    .send(Errors.USER_NOT_FOUND.message)
                break
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
