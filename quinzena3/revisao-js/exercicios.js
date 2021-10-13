// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = array.map((item, indice, array) => {
    return array[array.length - indice - 1]
  })

  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const arrayParElevados = array.filter((item) => {
    return item % 2 === 0
  })
    .map((item) => {
      return item ** 2
    })

  return arrayParElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrayPares = array.filter((item) => {
    return item % 2 === 0
  })

  return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for (let num of array) {
    if (maiorNumero < num) {
      maiorNumero = num
    }
  }

  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const respostas = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]

  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  for (let i = 0; i < n; i++) {
    numerosPares.push(i * 2)
  }

  return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return 'Equilátero'

  } else if (a === b || b === c) {
    return 'Isósceles'

  } else {
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  const objeto = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: 0,
    diferenca: 0
  }

  const verificarDivisao = (num1, num2) => {
    return num1 % num2 === 0
  }

  if (num1 < num2) {
    objeto.maiorNumero = num2
    objeto.maiorDivisivelPorMenor = verificarDivisao(num2, num1)
    objeto.diferenca = num2 - num1

    return objeto

  } else {
    objeto.maiorNumero = num1
    objeto.maiorDivisivelPorMenor = verificarDivisao(num1, num2)
    objeto.diferenca = num1 - num2


    return objeto
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let arraySegundoMaiorMenor = []
  for (let contador = 1; contador < array.length; contador++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i]
        array[i] = array[i + 1]
        array[i + 1] = aux
      }
    }
  }
  arraySegundoMaiorMenor.push(array[array.length - 2], array[1])

  return arraySegundoMaiorMenor
}

// EXERCÍCIO 11
function ordenaArray(array) {
  // for (let contador = 1; contador < array.length; contador++) {
  //   for (let i = 0; i < array.length - 1; i++) {
  //     if (array[i] > array[i + 1]) {
  //       let aux = array[i]
  //       array[i] = array[i + 1]
  //       array[i + 1] = aux
  //     }
  //   }
  // }
  // 
  // return array
  
  // Esse foi o Sekine que ensinou!
  let arrayOrdenado = []
  for (let item of array) {
    let contador = 0
    
    for (let itemComparado of array) {
      
      if (itemComparado > item)
      contador ++
    }
    
    arrayOrdenado[contador] = item
  }

  return arrayOrdenado
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavoritoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return filmeFavoritoAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  informacoesTriangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return informacoesTriangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const anonimo = {
    ...pessoa,
    nome: "ANÔNIMO"
  }

  return anonimo
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const arrayAdultos = arrayDePessoas.filter((item) => {
    return item.idade > 17
  })

  return arrayAdultos
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const arrayMenoresDeIdade = arrayDePessoas.filter((item) => {
    return item.idade < 18
  })

  return arrayMenoresDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const arrayMultiplicado = array.map((item) => {
    return item * 2
  })

  return arrayMultiplicado
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const arrayMultiplicadoString = array.map((item) => {
    item *= 2
    return item.toString()
  })

  return arrayMultiplicadoString
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const arrayParOuImpar = array.map((item) => {
    if (item % 2 === 0) {
      item = item.toString() + " é par"
    } else {
      item = item.toString() + " é ímpar"
    }
    return item
  })

  return arrayParOuImpar
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((item) => {
    return item.idade > 14 && item.idade < 60 && item.altura > 1.49
  })

  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter((item) => {
    return !(item.idade > 14 && item.idade < 60 && item.altura > 1.49)
  })

  return pessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  for (let contador = 1; contador < consultasNome.length; contador++) {
    for (let i = 0; i < consultasNome.length - 1; i++) {
      if (consultasNome[i].nome > consultasNome[i + 1].nome) {
        let aux = consultasNome[i]
        consultasNome[i] = consultasNome[i + 1]
        consultasNome[i + 1] = aux
      }
    }
  }

  return consultasNome
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  let consultasOrdenadas = []

  for (let i = 0; i < consultasData.length; i++) {
    let data = consultasData[i].dataDaConsulta.split("/").reverse().join()
    let paciente = { ...consultasData[i], novaData: data }
    consultasOrdenadas.push(paciente)
  }

  for (let contador = 1; contador < consultasOrdenadas.length; contador++) {
    for (let i = 0; i < consultasOrdenadas.length - 1; i++) {
      if (consultasOrdenadas[i].novaData > consultasOrdenadas[i + 1].novaData) {
        let aux = consultasOrdenadas[i]
        consultasOrdenadas[i] = consultasOrdenadas[i + 1]
        consultasOrdenadas[i + 1] = aux
      }
    }
  }

  for (let item of consultasOrdenadas) {
    delete item.novaData
  }

  return consultasOrdenadas
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  contas.forEach((conta) => {
    const totalGastos = conta.compras.reduce((acc, current) => acc += current, 0)
    conta.saldoTotal -= totalGastos
  })

  return contas
}
