// #### Exercícios de interpretação de código ####

/// Exercício 1.

// a)
//  O código verifica se um número é par ou ímpar. 
//  Verifica se um número dividido por 2 tem resto 0.

// b)
//  Para números pares.

// c)
//  Para números ímpares

/// Exercício 2.

// a)
//  Para mostrar o preço da fruta de acordo com a escolha do usuário

// b)
//  "O preço da fruta Maçã é R$2.25"

// c)
//  O código ia continuar rodando e o preço da fruta seria o valor do default.

/// Exercício 3.

// a)
//  Está pedindo para o usuário inserir um número e definindo o tipo number para a variável.

// b)
//  10. Esse número passou no teste
// -10. Nada.

// c)
//  Haverá um erro no console.log(mensagem), pois a variavel mensagem só esta declarada dentro das chaves
//  e não no escopo global.

// #### Exercícios de escrita de código ####

/// Exercício 1.

// a)
const idade = (prompt("Digite a sua idade."))

// b)
Number(idade)

// c)
if (idade > 17) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

/// Exercício 2.

const turnoEstudante = prompt("Digite o turno que você estuda: M (matutino) ou V (Vespertino) ou N (Noturno).")

if (turnoEstudante === "M") {
    console.log("Bom Dia!")
} else if (turnoEstudante === "V") {
    console.log("Boa Tarde!")
} else if (turnoEstudante === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Opção inválida! Digite M (matutino) ou V (Vespertino) ou N (Noturno).")
}

/// Exercício 3.

const turnoEstudante2 = prompt("Digite o turno que você estuda: M (matutino) ou V (Vespertino) ou N (Noturno).")

switch (turnoEstudante2) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Opção inválida! Digite M (matutino) ou V (Vespertino) ou N (Noturno).")
        break
}

/// Exercício 4.

const generoFilme = prompt("Qual o gênero do filme que você vai assistir?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if (generoFilme.toLowerCase() && valorIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

/// Desafio 1.

let lanchinho

if (generoFilme.toLowerCase() && valorIngresso < 15) {
    lanchinho = prompt("Qual snack você quer comprar?")
    if (lanchinho.endsWith("a")) {
        console.log("Bom filme!")
        console.log("Aproveite a sua", lanchinho)
    } else {
        console.log("Bom filme!")
        console.log("Aproveite o seu", lanchinho)
    }
}
else {
    console.log("Escolha outro filme :(")
}