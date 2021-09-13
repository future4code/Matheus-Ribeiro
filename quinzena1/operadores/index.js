/// Exercícios de interpretação 

/* Exercício 1
  a. false
  b. false
  c. true
  d. boolean
  */

/* Exercício 2
  As variaveis receberam valores do tipo string, por causa do prompt,
  será impresso no console a concatenação dos dois números, e não a 
  soma.
*/

/* Exercício 3
  A solução é utilizar a função Number() para transformar a string em 
  number.
  
  let primeiroNumero = Number(prompt("Digite um numero!"))
  let segundoNumero = Number(prompt("Digite outro numero!"))
*/

/// Exercícios de escrita de código

//  Exercício 1

    const idade = Number(prompt("Informe a sua idade:"))
    const idadeAmigo = Number(prompt("Informe a idade do seu melhor amigo(a):"))

    console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
    console.log("A diferença de idade entre você e seu melhor amigo(a) é:", idade - idadeAmigo)

//  Exercício 2

    const numeroPar = Number(prompt("Digite um numero par:"))
    console.log("O resto da divisão de um número par por 2 é", numeroPar % 2)

    // O resto da divisão de um numero par por 2 sempre vai ser 0.
    // A divisão de um numero ímpar por 2 sempre vai sobrar um resto. 

//  Exercício 3

    const idadeAnos = Number(prompt("Informe sua idade em anos"))
    const idadeMeses = idadeAnos * 12
    const idadeDias = idadeAnos * 365.25
    const idadeHoras = idadeDias * 24

    console.log("Idade em meses", idadeMeses)
    console.log("Idade em dias", idadeDias)
    console.log("Idade em horas", idadeHoras)

//  Exercício 4

    const numero1 = Number(prompt("Digite o primeiro número:"))
    const numero2 = Number(prompt("Digite o segundo número:"))

    console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
    console.log("O primeiro numero é igual ao segundo?", numero1 === numero2) 
    console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0) 
    console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)

/// Desafio

//  Exercício 1

// a.
    let grausF = 77
    let grausK = 0
    let grausC = 0

    grausK = (grausF - 32) * (5/9) + 273.15
    
    console.log(grausF, "Graus Fahrenheit(°F) é igual a", grausK, "Kelvin(K)")

// b.
    grausC = 80

    grausF = (grausC * 9/5) + 32

    console.log(grausC, "Graus Celsius(°C) é igual a", grausF, "Graus Fahrenheit(°F)")

// c.
    grausC = 30

    grausF = (grausC * 9/5) + 32
    grausK = (grausF - 32) * (5/9) + 273.15

    console.log(grausC, "Graus Celsius(°C) é igual a", grausF, "Graus Fahrenheit(°F)")
    console.log(grausC, "Graus Celsius(°C) é igual a", grausK, "Kelvin(K)")

// d.
    grausC = Number(prompt("Digite o valor em Graus Celsius(°C) que deseja converter:"))

    grausF = (grausC * 9/5) + 32
    grausK = (grausF - 32) * (5/9) + 273.15

    console.log(grausC, "Graus Celsius(°C) é igual a", grausF, "Graus Fahrenheit(°F)")
    console.log(grausC, "Graus Celsius(°C) é igual a", grausK, "Kelvin(K)")

//  Exercício 2

    const valorQuilowattsHora = 0.05
    const qntQuilowatts = 280
    let valorConta = qntQuilowatts * valorQuilowattsHora

    console.log("O valor a ser pago por uma residência que consuma", qntQuilowatts, "quilowatt-hora é R$", valorConta)

    const desconto = 15/100

    valorConta -= (valorConta * desconto)
    
    console.log("O valor a ser pago por uma residência que consuma", qntQuilowatts, "quilowatt-hora, com 15% de desconto é R$", valorConta)

//  Exercício 3

//a.
    let libra = 20
    let kg = 0

    kg = libra / 2,2046

    console.log(libra, "lb é equivalente a", kg, "kg")

//b.
    let oz = 10.5

    kg = oz / 35,274

    console.log(oz, "oz é equivalente a", kg, "kg")

//c.
    let milha = 100
    let metro = 0

    metro = milha * 1609

    console.log(milha, "mi é equivalente a", metro, "m")

//d.
    let pes = 50

    metro = pes / 3,281

    console.log(pes, "ft é equivalente a", metro, "m")

//e.
    let galao = 103.56
    let litro = 0

    litro = galao * 379

    console.log(galao, "gal é equivalente a", litro, "l")

//f.
    let xic = 450

    litro = (xic * 6) / 25

    console.log(xic, "xic é equivalente a", litro, "l")

//g.
    libra = Number(prompt("Digite o valor em Libras(lb) que deseja converter:"))

    kg = libra / 2,2046

    console.log(libra, "lb é equivalente a", kg, "kg")