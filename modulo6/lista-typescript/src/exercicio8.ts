const convertAno = (dtAtual: number, dtAnterior: number): number => {
  return (dtAtual - dtAnterior) * (3.17 * 10 ** -11)
}

const renovaDocumento = (
  dataNascimento: string,
  dataEmissao: string
): boolean => {
  const dataAtual = new Date().getTime()

  const dtNascimento: number = Date.parse(
    dataNascimento.split("/").reverse().join("/")
  )
  const dtEmissao: number = Date.parse(
    dataEmissao.split("/").reverse().join("/")
  )

  const idade = convertAno(dataAtual, dtNascimento)
  const validade = convertAno(dataAtual, dtEmissao)

  if (idade < 21 && validade > 4) return true
  else if (idade > 20 && idade < 51 && validade > 9) return true
  else if (idade > 50 && validade > 14) return true
  else return false
}

console.log(renovaDocumento("15/12/1964", "01/01/2008"))
