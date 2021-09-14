/// ####Exercícios de interpretação de código

/* 
1)Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

    let array
    console.log('a. ', array)

    array = null
    console.log('b. ', array)

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i])

    array[i+1] = 19
    console.log('e. ', array)

    const valor = array[i+6]
    console.log('f. ', valor)

    a. undefined
    b. null
    c. 11
    d. 3
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f. 9

2)Leia o código abaixo com atenção 

    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

    Resposta: SUBI NUM ÔNIBUS EM MIRROCOS 27 
*/

/// ####Exercícios de escrita de código

//  Exercício 1
//  Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//  O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

    const nomeDoUsuario = prompt("Digite seu nome.")
    const emailDoUsuario = prompt("Digite seu email.")

    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//  Exercício 2
//  Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    // a. Imprima na tela o array completo
        const comidasFavoritas = ["Picanha", "Pizza", "Lasanha", "Hamburguer", "Sushi"]
        console.log(comidasFavoritas)
    
    // b. Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
        console.log(`Essas são as minhas comidas preferidas: \n${comidasFavoritas[0]} \n${comidasFavoritas[1]} \n${comidasFavoritas[2]} \n${comidasFavoritas[3]} \n${comidasFavoritas[4]}`)
    
    // c. Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista.
        comidasFavoritas[1] = prompt("Digite sua comida favotira.")
        console.log(comidasFavoritas)

//  Exercício 3
//  Faça um programa, seguindo os passos:

    // a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
        let listaDeTarefas = []

    // b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array   
        listaDeTarefas.push(prompt("Digite uma tarefa que vc precisa realizar."))
        listaDeTarefas.push(prompt("Digite mais uma tarefa que vc precisa realizar."))
        listaDeTarefas.push(prompt("Digite mais uma tarefa que vc precisa realizar."))
    
    // c. Imprima o array na tela
        console.log(listaDeTarefas)

    // d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
        const tarefaRealizada = (prompt("Digite o índice da tarefa realizada."))
        listaDeTarefas.splice(tarefaRealizada, 1)
    
    // f. Remova da lista o item de índice que o usuário escolheu.
        console.log(listaDeTarefas)

//  Desafio

    // 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços.
        const frase = prompt("Digite uma frase.")
        const array = frase.split(" ")
        console.log(array)

    // 2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array.
        const listaDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
        const indiceDoAbacaxi = listaDeFrutas.indexOf("Abacaxi")
        const tamanhoDoArray = listaDeFrutas.length
        console.log(`O índice de "Abacaxi é: ${indiceDoAbacaxi}.\nO tamanho total do array é: ${tamanhoDoArray}.`)