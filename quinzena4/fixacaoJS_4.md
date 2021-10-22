```function contaOcorrencias(arrayDeNumeros,numeroEscolhido){
  const arrayNumeroEscolhido = arrayDeNumeros.filter((item) => {
    return item === numeroEscolhido
  })
  
  if (arrayNumeroEscolhido.length === 0) {
    return "Número não encontrado"
  } else {
    return `O número ${numeroEscolhido} aparece ${arrayNumeroEscolhido.length}x`
  }
}```