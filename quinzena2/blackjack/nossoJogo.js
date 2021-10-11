const mensagemDeBoasVindas = "Boas vindas ao jogo de Blackjack!"
console.log(mensagemDeBoasVindas)

if (confirm("Quer iniciar uma nova rodada?")) {
   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()

   let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

   console.log(`Usuário: cartas ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação: ${pontuacaoUsuario}`)
   console.log(`Computador: cartas ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação: ${pontuacaoComputador}`)

   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("O Usuário ganhou!!!")
   } else if (pontuacaoUsuario < pontuacaoComputador) {
      console.log("O Computador ganhou!!!")
   } else if (pontuacaoUsuario === pontuacaoComputador)
      console.log("Empate!!!")
} else {
   console.log("O jogo acabou!")
}