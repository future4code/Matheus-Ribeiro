/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let jogador = []
let computador = []

if (confirm(`Boas vindas ao jogo Blackjack!\nDeseja iniciar uma nova rodada?`)) {
   
   let sortearCartas = false
   
   while (!sortearCartas) {
      jogador.push(comprarCarta())
      jogador.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())
      if ((jogador[0].valor && jogador[0].valor === 11) ||
         (computador[0].valor && computador[0].valor === 11)) {
            jogador = []
            computador = []
      } else {
         sortearCartas = true
      }
   }

   let continuarComprando = true
   
   while (continuarComprando) {
      let pontos = 0
      let cartas = ""
      for (let carta of jogador) {
         pontos = pontos + carta.valor
         cartas = cartas + carta.texto
      }
      if (pontos > 21) {
         continuarComprando = false
      } else {
         let confirmarCompra = confirm(
            `Suas cartas são ${cartas}. A Carta revelada do computador é ${computador[0].texto}\nDeseja comprar mais uma carta?`
         )
         if (confirmarCompra) {
            jogador.push(comprarCarta())
         } else {
            continuarComprando = false
         }
      }
   }

   let pontosJogador
   let pontosComputador
   
   
} else {
   alert("O jogo acabou!")
}