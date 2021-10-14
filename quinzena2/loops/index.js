// #### Exercícios de interpretação de código ####

/// Exercício 1.

//  Está fazendo um laço de repetição enquanto i menor que 5, atribuindo á valor, valor + i
//  e incrementendo i + 1 a cada volta.
//  Será impresso o valor 10.

/// Exercício 2.

// a)
//  19.
//  21.
//  23.
//  25.
//  27.
//  30.

// b) 
//  O for... of... é suficiente

/// Exercício 3.

//  *
//  **
//  ***
//  ****

// #### Exercícios de escrita de código ####

/// Exercício 1.

let numeroDeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nomeBichinhos = []

if (numeroDeBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (numeroDeBichinhos > 0) {
    for (let i = 0; i < numeroDeBichinhos; i++) {
        nomeBichinhos[i] = prompt("Digite o nome do seu pet!")
    }
    console.log(nomeBichinhos)
} else {
    console.log("ERRO")
}

/// Exercício 2.

const arrayOriginal = [3, 4, 7, 10, 5, 90, 7, 8]

// a)
let imprimirValoresOriginais = (array) => {
    for (let valores of arrayOriginal) {
        console.log(valores)
    }
}

imprimirValoresOriginais(arrayOriginal)

// b)
let imprimirValoresDivididosPorDez = (array) => {
    for (let valores of arrayOriginal) {
        console.log(valores / 10)
    }
}

imprimirValoresDivididosPorDez(arrayOriginal)

// c)
let criarArrayNumerosPares = (array) => {
    let novoArray = []

    for (let valores of arrayOriginal) {
        if (valores % 2 === 0) {
            novoArray.push(valores)
        }
    }
    return novoArray
}

console.log(criarArrayNumerosPares(arrayOriginal))

// d)
let imprimirString = (array) => {
    let arrayString = []
    let mensagem = " "

    for (let i = 0; i < array.length; i++) {
        mensagem = `O elemento do índex ${i} é: numero ${array[i]}`
        arrayString.push(mensagem)
    }
    return arrayString
}

console.log(imprimirString(arrayOriginal))

// e)
let imprimirMaiorMenor = (array) => {
    let maiorNumero = 0
    let menorNumero = 1000

    for (let numeroAtual of arrayOriginal) {
        if (numeroAtual < menorNumero)
            menorNumero = numeroAtual
    }

    for (let numeroAtual of arrayOriginal) {
        if (numeroAtual > maiorNumero)
            maiorNumero = numeroAtual
    }
    console.log(`O menor número é ${menorNumero} e o maior é ${maiorNumero}`)
}
imprimirMaiorMenor(arrayOriginal)

/// Desafio 1.

console.log("Vamos jogar!")
let numero1 = Number(prompt("Escolha um número!"))
let numeroChute
let tentativas = 0

while (numeroChute !== numero1) {
    tentativas = tentativas + 1
    numeroChute = Number(prompt("Chute um numero!"))
    if (numeroChute < numero1) {
        console.log("O número chutado foi:", numeroChute)
        console.log("Errrrrrou, é maior")

    } else if (numeroChute > numero1) {
        console.log("O número chutado foi:", numeroChute)
        console.log("Errrrrrou, é menor")

    } else {
        console.log("O número chutado foi:", numeroChute)
        console.log("Acertou!!!")
        console.log("O numero de tentativas foi: ", tentativas)
    }
}

/// Desafio 2.

console.log("Vamos jogar!")
let numero2 = Math.floor((Math.random() * 100) + 1);
let numeroChute2
let tentativas2 = 0

if (confirm("Tente adivinhar o número entre 1 e 100")) {
    while (numeroChute2 !== numero2) {
        tentativas2 = tentativas2 + 1
        numeroChute2 = Number(prompt("Chute um numero!"))
        if (numeroChute2 < numero2) {
            console.log("O número chutado foi:", numeroChute2)
            console.log("Errrrrrou, é maior")

        } else if (numeroChute2 > numero2) {
            console.log("O número chutado foi:", numeroChute2)
            console.log("Errrrrrou, é menor")

        } else {
            console.log("O número chutado foi:", numeroChute2)
            console.log("Acertou!!!")
            console.log("O numero de tentativas foi: ", tentativas2)
        }
    }
} else {
    alert("FIM")
}