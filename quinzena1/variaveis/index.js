// parte 1

let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

// as duas variaveis são do tipo undefined, pois ainda não receberam nenhuma atribuição.

nome = prompt("Digite o seu nome:")
idade = prompt("Digite a sua idade:")
console.log(typeof nome)
console.log(typeof idade)

/* as duas variaveis se transforam em string, pois a atribuição foi feita através do 
prompt e tudo que vem do prompt recebe o tipo string. */

console.log("Olá", nome, ", você tem", idade, "anos.")

// parte 2

let corRoupa = prompt("Você está usando roupa branca hoje?")
let ehAluno = prompt("Você é aluno da Labenu?")
let ehHumano = prompt("Você é humano?")

const resposta1 = corRoupa
const resposta2 = ehAluno
const resposta3 = ehHumano

console.log("Você está usando roupa branca hoje? -", resposta1)
console.log("Você é aluno da Labenu? -", resposta2)
console.log("Você é Humano? -", resposta3)

// parte 3

let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// desafio

let num1 = prompt("Digite o primeiro número:")
let num2 = prompt("Digite o segundo número:")

num1 = Number(num1)
num2 = Number(num2)

let x = num1 + num2
let y = num1 * num2

console.log("1. O primeiro número somado ao segundo número resulta em:", x)
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:", y)