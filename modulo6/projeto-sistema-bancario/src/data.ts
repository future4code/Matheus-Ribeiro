export enum Transacao {
    DEBITO = "Pagamento de conta",
    DEPOSITO = "Depósito de dinheiro",
    TRANSFERENCIA_SAIDA = "Transferência de dinheiro",
    TRANSFERENCIA_ENTRADA = "Recebimento de transferência de dinheiro"
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
    descricao: Transacao,
    status?: string
}

export type Conta = DadosUsuario & DadosConta

export const usuarios: Conta[] = [
    {
        nome: "Matheus",
        cpf: "449.543.568-06",
        dataDeNascimento: "15/12/1994",
        saldo: 100000.00,
        extrato: [
            {
                valor: 100.0,
                data: "08/04/2022",
                descricao: Transacao.DEPOSITO,
            },
            {
                valor: 50000.0,
                data: "08/04/2022",
                descricao: Transacao.DEBITO,
            },
            {
                valor: 20000.0,
                data: "08/04/2022",
                descricao: Transacao.DEBITO,
            },
            {
                valor: 10000.0,
                data: "08/04/2022",
                descricao: Transacao.DEBITO,
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
            {
                valor: 1000.00,
                data: "08/04/2022",
                descricao: Transacao.DEBITO,
            },
            {
                valor: 1500.00,
                data: "08/04/2022",
                descricao: Transacao.DEBITO,
            },
            {
                valor: 1200.00,
                data: "09/04/2022",
                descricao: Transacao.DEBITO,
            },
        ],
    },
]
