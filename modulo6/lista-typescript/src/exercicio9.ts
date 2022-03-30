const anagramas = (palavra: string): number => {

  const numeroLetras: number = palavra.length
  
  let numAnagramas: number = 1

  for (let i = numeroLetras; i > 0; i--) {
    numAnagramas *= i
  }

  return numAnagramas
}

console.log(anagramas("mesa"))
