const [operacao, num1, num2] = [
  process.argv[2],
  Number(process.argv[3]),
  Number(process.argv[4]),
]

switch (operacao) {
  case "add":
    console.log(`Resposta: ${num1 + num2}`)
    break
  case "sub":
    console.log(`Resposta: ${num1 - num2}`)
    break
  case "mult":
    console.log(`Resposta: ${num1 * num2}`)
    break
  case "div":
    console.log(`Resposta: ${num1 / num2}`)
    break
}
