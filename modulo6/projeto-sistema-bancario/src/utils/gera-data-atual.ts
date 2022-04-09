export const gerarDataAtual = (): string => {
    const dia: string = String(new Date().getDate()).padStart(2, "0")
    const mes: string = String(new Date().getMonth() + 1).padStart(2, "0")
    const ano: string = String(new Date().getFullYear())

    return `${dia}/${mes}/${ano}`
}
