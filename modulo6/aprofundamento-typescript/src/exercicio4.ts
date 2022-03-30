//a)
type pokemon = {
  name: string
  types: string
  healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
}

//b)
// Necessário executar o comando "tsc 'nome do arquivo'" no bash estando na pasta do arquivo com o tsconfig.json.

//c)
// Seria necessário adicionar "./src" antes do 'nome do arquivo', ficando "tsc ./src/'nome do arquivo'"

//d)
// Digitar, no terminal, tsc sem o nome do arquivo, estando na pasta que estejam os arquivos .ts