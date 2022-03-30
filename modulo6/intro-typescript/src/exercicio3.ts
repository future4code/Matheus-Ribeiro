// Exercício 3
const checaAnoBissexto: (ano: number) => boolean = (ano) => {
  const cond1: boolean = ano % 400 === 0
  const cond2: boolean = ano % 4 === 0 && ano % 100 !== 0
  return cond1 || cond2
}
console.log("Exercício 3\n", checaAnoBissexto(2022))
