// #### Exercícios de interpretação de código ####

/// Exercício 1.

// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h

/// Exercício 2.

// a)
// nome: Juca, idade: 3, raca: SRD
// nome: Juba, idade: 3, raca: SRD
// nome: Jubo, idade: 3, raca: SRD

// b)
// copia todos os dados do objeto anterior, para um novo.

/// Exercício 2.

// a)
// false
// undefined

// b)
// primeiro foi impresso o valor da propriedade "backender", depois foi impresso undefined porque a propriedade "altura" não estava declarada.

// #### Exercícios de escrita de código ####

/// Exercício 1.

// a)
    const pessoa = {
      nome: "Matheus",
         apelidos: ["Matheuzinho", "Theuzinho", "Math"]
     }

     let imprimirPessoa = (objeto) => {
     return console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
     }
     imprimirPessoa(pessoa)

// b)
     const novosApelidos = {
         ...pessoa,
         apelidos: ["Mathzinho", "Theus", "Mathz"]
     }
     imprimirPessoa(novosApelidos)

//  Exercício 2.

// a)
     const perfil1 = {
         nome: "Matheus",
         idade: 26,
         profissao: "Farmacêutico"  
     }
    
     const perfil2 = {
         nome: "Beatriz",
         idade: 23,
         profissao: "Engenheira Biotecnológica"
     }

// b)
     let imprimirArrayDePerfil = (objeto1, objeto2) => {
        const array = [
             objeto1.nome, objeto1.nome.length , objeto1.idade, objeto1.profissao, objeto1.profissao.length,
            objeto2.nome, objeto2.nome.length , objeto2.idade, objeto2.profissao, objeto2.profissao.length
         ]
         return console.log(array)  
     }
    
     imprimirArrayDePerfil(perfil1, perfil2)

/// Exercício 3.

// a)
    const carrinho = []

// b)
    const frutas1 = {
        nome: "Banana",
        disponibilidade: true
    }
    const frutas2 = {
        nome: "Morango",
        disponibilidade: true
    }
    const frutas3 = {
        nome: "Uva",
        disponibilidade: true
    }

// c)
    let colocarNoCarrinho = (objeto) => {
        carrinho.push(objeto)
    }
    colocarNoCarrinho([frutas1, frutas2, frutas3])
    console.log(carrinho)

/// Desafio 1.

     let imprimirPerfil = () => {
         let perfil = {
             nome: prompt("Digite seu nome."),
             idade: Number(prompt("Digite sua idade")),
             profissao: prompt("Digite sua profissão")
         }
         return console.log(perfil, typeof(perfil))
     }
     imprimirPerfil()

/// Desafio 2.

     let compararAnoLancamento = (objeto1, objeto2) => {
         const lancamentoPrimeiroAntesSegundo = objeto1.ano < objeto2.ano
         const lancamentoMesmoAno = objeto1.ano === objeto2.ano
         return console.log(`O primeiro filme foi lançado antes do segundo? ${lancamentoPrimeiroAntesSegundo}\nO primeiro filme foi lançado no mesmo ano do segundo? ${lancamentoMesmoAno}`)
     }

     const filme1 = {
         nome: "Avengers: Endgame",
         ano: 2019
     }
     const filme2 = {
         nome: "Joker",
         ano: 2019
     }
     compararAnoLancamento(filme1, filme2)

/// Desafio 3.

    let controlarEstoque2 = (objeto) => {
        objeto.disponibilidade = !objeto.disponibilidade
        return console.log(objeto)
    }
    controlarEstoque2(frutas1)