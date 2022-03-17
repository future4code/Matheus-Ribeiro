// a)
// Podemos acessar os parâmetros passados na linha de comando através do process.argv a partir do índice 2

// b)
    const nome = process.argv[2]
    const idade = Number(process.argv[3])
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c)
    const novaIdade = idade + 7
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)
    