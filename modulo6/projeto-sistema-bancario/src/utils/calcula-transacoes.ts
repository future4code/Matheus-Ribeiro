import { DadosConta, Transacao } from "../data"
import { gerarDataAtual } from "./gera-data-atual"

export const calcularTransacoes = (usuario: DadosConta, tipoTransacao: Transacao): number => {
    return usuario.extrato
        .filter((debito) => {
            const dataAtual = new Date(gerarDataAtual().split("/").reverse().join("/"))
            const dataPagamento = new Date(debito.data.split("/").reverse().join("/"))

            if (
                tipoTransacao === Transacao.TRANSFERENCIA_SAIDA ||
                tipoTransacao === Transacao.TRANSFERENCIA_ENTRADA
            )
                return (
                    dataPagamento <= dataAtual &&
                    debito.descricao === tipoTransacao &&
                    debito.status !== "Pago"
                )
            else {
                return dataPagamento < dataAtual && debito.descricao === tipoTransacao && debito.status !== "Pago"
            }
        })
        .map((debito) => {
            debito.status = "Pago"
            return debito.valor
        })
        .reduce((acumulador, debito) => {
            return (acumulador += debito)
        }, 0)
}
