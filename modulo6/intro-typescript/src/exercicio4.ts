//Exercício 4
const comparaDoisNumeros: (num1: number, num2: number) => number = (
  num1,
  num2
) => {
  let maiorNumero: number
  let menorNumero: number

  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  const diferenca: number = maiorNumero - menorNumero
  return diferenca
}
console.log("Exercício 4\n", comparaDoisNumeros(10, 20))
