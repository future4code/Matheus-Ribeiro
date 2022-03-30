const calcularNumeros: (num1: number, num2: number) => object = (
  num1,
  num2
) => {
  const soma = num1 + num2
  const subtracao = num1 - num2
  const multiplicacao = num1 * num2

  let maiorNumero
  if (num1 > num2) maiorNumero = num1
  else maiorNumero = num2

  return [{
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    maiorNumero: maiorNumero,
  }]
}
console.table(calcularNumeros(10, 2));

