export enum Transacao {
    DEBITO = "Débito",
    DEPOSITO = "Depósito de dinheiro",
}

export type DadosUsuario = {
    nome: string
    cpf: string
    dataDeNascimento: string
}

export type DadosConta = {
    saldo: number
    extrato: Extrato[]
}

export type Extrato = {
    valor: number
    data: string
    descricao: Transacao.DEBITO | Transacao.DEPOSITO
}

export type Conta = DadosUsuario & DadosConta

export const usuarios: Conta[] = [
    {
        nome: "Matheus",
        cpf: "433.546.332-12",
        dataDeNascimento: "15/12/1994",
        saldo: 100000000.00,
        extrato: [
            {
                valor: 100.0,
                data: "08/04/2022",
                descricao: Transacao.DEPOSITO,
            },
        ],
    },
    {
        nome: "Rengar",
        cpf: "452.546.754-06",
        dataDeNascimento: "15/01/1997",
        saldo: 5000.00,
        extrato: [
            {
                valor: 5000.00,
                data: "08/04/2022",
                descricao: Transacao.DEPOSITO,
            },
        ],
    },
]
