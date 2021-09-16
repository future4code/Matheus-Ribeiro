// #### Exercícios de interpretação de código ####

/// Exercício 1.

// a) 10.
// b) 50
// c) Não apareceria nada.

/// Exercício 2.

// a) Ela recebe uma string, transforma tudo em lowerCase e verifica se existe 
//    a palavra "cenoura" no texto. Tem como retorno um booleano true ou false.

// b) i. True
//   ii. True
//  iii. False

// #### Exercícios de escrita de código ####

/// Exercício 1.

// a)
    let imprimirInformacoes = () => {
        console.log("Eu sou Matheus, tenho 26 anos, moro em Valinhos e sou estudante.")
    }
    imprimirInformacoes()

// b)
    let informarDados = (nome, idade, cidade, profissao) => {
        const informacoesUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
        return informacoesUsuario    
    }
    console.log(informarDados("Matheus", 26, "Valinhos", "Farmacêutico"))

/// Exercício 2.

// a)
    let somarDoisNumeros = (numero1, numero2) => {
        const soma = numero1 + numero2
        return soma
    }
    console.log(somarDoisNumeros(10, 10))

// b) 
    let checarNumeroMaiorMenor = (numero1, numero2) => {
        const verificar = numero1 >= numero2
        return verificar
    }
    console.log(checarNumeroMaiorMenor(10, 20))

// c)
    let numeroParImpar = (numero) => {
        const resultado = numero % 2 === 0
        return resultado
    }
    console.log(numeroParImpar(10))

// d)
    let imprimeMensagem = (mensagem) => {
        console.log(mensagem.length, mensagem.toUpperCase())
    }
    imprimeMensagem("Meu nome é Matheus")

/// Exercício 3

    let somarNumeros = (numero1, numero2) => {
        const resultadoSoma = numero1 = numero2
        return resultadoSoma
    }

    let subtrairNumeros = (numero1, numero2) => {
        const resultadoSubtracao = numero1 - numero2
        return resultadoSubtracao
    }

    let multiplicarNumeros = (numero1, numero2) => {
        const resultadoMultiplicacao = numero1 * numero2
        return resultadoMultiplicacao
    }

    let dividirNumeros = (numero1, numero2) => {
        const resultadoDivisao = numero1 / numero2
        return resultadoDivisao
    }

    let imprimirResultados = () => {
        console.log(`Números inseridos: ${numero1}, ${numero2}`)
        console.log(`Soma: ${somarNumeros(numero1, numero2)}`)
        console.log(`Diferença: ${subtrairNumeros(numero1, numero2)}`)
        console.log(`Multiplicação: ${multiplicarNumeros(numero1, numero2)}`)
        console.log(`Divisão: ${dividirNumeros(numero1, numero2)}`)
    }
    
    const numero1 = Number(prompt("Digite o primeiro número."))
    const numero2 = Number(prompt("Digite o segundo número."))
    
    imprimirResultados()

/// Desafio

// Exercício 1

    let imprimirResposta = (resposta) => {
        let recebeResposta = resposta
        console.log(recebeResposta)
    }

    let calcularNumeros = (numero1, numero2) => {
        let soma = numero1 + numero2
        imprimirResposta(soma)
    }

    calcularNumeros(10, 20)

// Exercício 2

    let calcularTeorema = (a,b) => {
        const hipotenusa = ((a ** 2) + (b ** 2)) ** (1/2)
        return hipotenusa  
    }
    console.log(calcularTeorema(3, 4))