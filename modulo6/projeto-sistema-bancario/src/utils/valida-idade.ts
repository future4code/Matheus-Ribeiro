export const verificaIdade = (dtNascimento: string): boolean => {
    const dataAtual = new Date().getTime()

    const dataNascimento: number = Date.parse(
        dtNascimento.split("/").reverse().join("/")
    )
    
    const idade = (dataAtual - dataNascimento) * (3.17 * 10 ** -11)

    return idade >= 18
}

