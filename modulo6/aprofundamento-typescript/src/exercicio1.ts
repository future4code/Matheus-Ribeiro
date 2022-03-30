//a)
// const minhaString: string = 6

// O tipo number não pode ser atribuido ao tipo string

//b)
const meuNumero: number | string = "Seis"

// Adicionando um operador de "OU" na tipagem e atribuindo também o tipo string

//c)
const pessoa: { nome: string; idade: number; corFavorita: string } = {
  nome: "Matheus",
  idade: 27,
  corFavorita: "Azul",
}

type Pessoa = {
  nome: string
  idade: number
  corFavorita: Cores
}

//d)
enum Cores {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}

const usuario1: Pessoa = {
  nome: "Matheus",
  idade: 27,
  corFavorita: Cores.AZUL,
}

const usuario2: Pessoa = {
  nome: "Beatriz",
  idade: 24,
  corFavorita: Cores.VERDE,
}

const usuario3: Pessoa = {
  nome: "Rengar",
  idade: 3,
  corFavorita: Cores.LARANJA,
}
