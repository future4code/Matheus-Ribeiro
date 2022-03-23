// Exercício 1
const checaTriangulo: (
    ladoA: number,
    ladoB: number,
    ladoC: number
  ) => string = (ladoA, ladoB, ladoC) => {
    if (ladoA !== ladoB && ladoB !== ladoC) return "Escaleno"
    else if (ladoA === ladoB && ladoB === ladoC) return "Equilátero"
    else return "Isósceles"
  }
  console.log("Exercício 1")
  console.table([
    checaTriangulo(10, 10, 10),
    checaTriangulo(10, 20, 10),
    checaTriangulo(10, 20, 20),
  ])