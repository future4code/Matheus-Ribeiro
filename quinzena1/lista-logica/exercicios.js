// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = Number(prompt("Digite a altura do retângulo."))
  const largura =  Number(prompt("Digite a largura do retângulo."))
  const areaRetangulo = altura * largura

  console.log(areaRetangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Digite o ano atual."))
  const anoNascimento = Number(prompt("Digite o ano do seu nascimento."))
  const idade = anoAtual - anoNascimento

  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt("Digite seu peso em kg."))
  const altura = Number(prompt("Digite sua altura em metros."))
  const imc = peso / (altura * altura)

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Digite seu nome.")
  const idade = prompt("Digite a sua idade.")
  const email = prompt("Digite o seu email.")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const corUm = prompt("Digite a sua cor favorita.")
  const corDois = prompt("Digite a sua segunda cor favorita.")
  const corTres = prompt("Digite a sua terceira cor favorita.")
  const listaCores = [corUm, corDois, corTres]

  console.log(listaCores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const string = prompt("Digite uma string.")
  console.log(string.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = prompt("Digite o valor do custo do espetáculo.")
  const valorIngresso = prompt("Digite o valor de cada ingresso.")
  const ingressosVendidos = custoEspetaculo / valorIngresso

  console.log(ingressosVendidos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const stringUm = prompt("Digite uma string.")
  const stringDois = prompt("Digite outra string.")
  const checaMesmoTamanho = stringUm.length === stringDois.length
  
  console.log(checaMesmoTamanho)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const stringUm = prompt("Digite uma string.")
  const stringDois = prompt("Digite outra string.")
  const checaString = stringUm.toLowerCase().includes(stringDois.toLowerCase())

  console.log(checaString)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Digite o ano atual."))
  const anoNascimento = Number(prompt("Digite o ano de Nascimento."))
  const anoEmissaoRg = Number(prompt("Digite o ano de emissão do seu RG."))
  const idade = anoAtual - anoNascimento
  const validadeRg = anoAtual - anoEmissaoRg
  const renovaIdade20 = idade < 21 && validadeRg > 4
  const renovaIdade50 = idade > 20 && idade < 51 && validadeRg > 9
  const renova50Mais = idade > 50 && validadeRg > 14
  const checaRenovacao = renovaIdade20 || renovaIdade50 || renova50Mais

  console.log(checaRenovacao)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt("Digite um ano para checar se é bissexto."))
  const ehBissexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0
  
  console.log(ehBissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idade = prompt("Você tem mais de 18 anos? sim/não")
  const escolaridade = prompt("Você possui ensino médio completo? sim/não")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim/não")
  const validar = idade.toLowerCase().includes("sim") && escolaridade.toLowerCase().includes("sim") && disponibilidade.toLowerCase().includes("sim") 
  
  console.log(validar)
}