let jogador = []
let computador = []

if (confirm(`Boas vindas ao jogo Blackjack!\nDeseja iniciar uma nova rodada?`)) {
   
   let sortearCartas = true
   
   while (sortearCartas) {
      jogador.push(comprarCarta())
      jogador.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())
      if ((jogador[0].valor && jogador[0].valor === 11) ||
         (computador[0].valor && computador[0].valor === 11)) {
            jogador = []
            computador = []
      } else {
         sortearCartas = false
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

   let pontosJogador = 0
   let pontosComputador = 0
   let textoJogador = ""
   let textoComputador = ""

   for (let carta of jogador) {
      pontosJogador = pontosJogador + carta.valor
      textoJogador = textoJogador + carta.texto
   }

   for (let carta of computador) {
      pontosComputador = pontosComputador + carta.valor
      textoComputador = textoComputador + carta.texto
   }
   
   if (pontosJogador <= 21) {
      while (pontosComputador < pontosJogador && pontosComputador <= 21) {
         computador.push(comprarCarta())
         pontosComputador = 0
         textoComputador = ""
         for (let carta of computador) {
            pontosComputador = pontosComputador + carta.valor
            textoComputador = textoComputador + carta.texto
         }
      }
   }
   
   let resultado = " "

   if (pontosJogador > pontosComputador && pontosJogador <= 21){
      resultado = "O usuário ganhou!!!"
   } else if (pontosComputador > pontosJogador && pontosComputador <= 21){
      resultado = "O computador ganhou!!!"
   } else if (pontosJogador > 21 && pontosComputador <= 21){
      resultado = "O computador  ganhou!!!"
   } else if (pontosComputador > 21 && pontosJogador <= 21){
      resultado = "O usuário ganhou!!!"
   } else {
      resultado = "Empate!!!"
   }

   alert(
      `Usuário - Cartas: ${textoJogador} - Pontuação: ${pontosJogador}` + 
      "\n" + 
      `Computador - Cartas: ${textoComputador} - Pontuação: ${pontosComputador}` + 
      "\n" + resultado
   )
   
} else {
   alert("O jogo acabou!")
}