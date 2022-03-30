const validaCPF = (cpf: string): boolean => {
  const cpfFormat: string[] = cpf.replace("-", ".").split(".")
  const digitosVerificadores: string[] = cpfFormat.pop().split("")
  const noveDigitos: string[] = cpfFormat.join("").split("")
  const dezDigitos: string[] = [...noveDigitos, digitosVerificadores[0]]

  if (
    cpf === "000.000.000-00" ||
    cpf === "111.111.111-11" ||
    cpf === "222.222.222-22" ||
    cpf === "333.333.333-33" ||
    cpf === "444.444.444-00" ||
    cpf === "555.555.555-55" ||
    cpf === "666.666.666-66" ||
    cpf === "777.777.777-77" ||
    cpf === "888.888.888-88" ||
    cpf === "999.999.999-99"
  ) {
    return false
  }

  let soma = 0
  let multiplicador = 10
  let modulo11: number

  for (let i = 0; i < noveDigitos.length && multiplicador > 1; i++) {
    let total = Number(noveDigitos[i]) * multiplicador
    soma += total
    total = 0
    multiplicador--
  }

  modulo11 = soma % 11
  let verificaPrimeiro = 11 - modulo11

  if (verificaPrimeiro >= 10) {
    verificaPrimeiro = 0
  }

  soma = 0
  multiplicador = 11

  for (let i = 0; i < dezDigitos.length && multiplicador > 1; i++) {
    let total = Number(dezDigitos[i]) * multiplicador
    soma += total
    total = 0
    multiplicador--
  }

  modulo11 = soma % 11
  let verificaSegundo = 11 - modulo11

  if (verificaSegundo >= 10) {
    verificaSegundo = 0
  }

  if (
    verificaPrimeiro === Number(digitosVerificadores[0]) &&
    verificaSegundo === Number(digitosVerificadores[1])
  )
    return true
  else return false
}
console.log(validaCPF("145.382.206-20"))
