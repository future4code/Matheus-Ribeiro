//a)
// A entrada é um array de números e a saída vai ser um objeto

type Estatisticas = {
  maior: number
  menor: number
  media: number
}

const obterEstatisticas: (numeros: number[]) => Estatisticas = (numeros) => {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b)

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas: Estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  }

  return estatisticas
}

console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]))

//b) Variável estatisticas que é do tipo Type Aliases Estatisticas, variável numerosOrdenados que é do tipo number[] e soma do tipo number

//c)
type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatisticas
}





