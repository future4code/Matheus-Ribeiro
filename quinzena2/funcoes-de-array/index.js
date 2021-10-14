// #### Exercícios de interpretação de código ####

/// Exercício 1.

// a)
// Vai imprimir para cada item do array, o objeto usuários, o índice e o array.

/// Exercício 2.

// a)
// Vai imprimir o nome de cada item do objeto do array

/// Exercício 3.

// a)
// Vai imprimir o objeto que não tenha o apelido de "Chijo"

// #### Exercícios de escrita de código ####

/// Exercício 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a)
const nomeDogs = pets.map((item) => {
    return item.nome
})
console.log(nomeDogs)

// b)
const cachorroSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})
console.log(cachorroSalsicha)

// c)
const promocaoPoodle = pets.filter((item) => {
    return item.raca === "Poodle"
}).map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
console.log(promocaoPoodle)

/// Exercício 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a)
const nomeProdutos = produtos.map((item) => {
    return item.nome
})
console.log(nomeProdutos)

// b)
const aplicarDesconto = produtos.map((item) => {
    const nomeEPreco = {
        nome: item.nome,
        preco: item.preco * 0.95
    }
    return nomeEPreco
})
console.log(aplicarDesconto)

// c)
const objetoBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(objetoBebidas)

// d)
const produtosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(produtosYpe)

// e)
const compreYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
}).map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(compreYpe)

// ou
const compreProdutosYpe = produtosYpe.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(compreProdutosYpe)