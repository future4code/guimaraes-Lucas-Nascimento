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

console.log("Boas vindas ao jogo de Blackjack!")

let jogar = confirm("Gostaria de iniciar o jogo?")

if (jogar) {
   let usuarioCompra1 = comprarCarta()
   let usuarioCompra2 = comprarCarta()
   let pcCompra1 = comprarCarta() 
   let pcCompra2 = comprarCarta()

   let pontuacaoUsuario = usuarioCompra1.valor + usuarioCompra2.valor
   let pontuacaoPc = pcCompra1.valor + pcCompra2.valor

   console.log(`Cartas do usuário: ${usuarioCompra1.texto} ${usuarioCompra2.texto} - ${pontuacaoUsuario}`)
   console.log(`Cartas do computador: ${pcCompra1.texto} ${pcCompra2.texto} - ${pontuacaoPc} `)

   if (pontuacaoUsuario > pontuacaoPc) {
      console.log("Parabéns! O usuário ganhou!")
   } else if (pontuacaoPc > pontuacaoUsuario) {
      console.log("Que pena, o computador ganhou!")
   } else if (pontuacaoUsuario === pontuacaoPc) {
      console.log("Empate!")
   }
} else {
   console.log ("Fim de jogo!")
}
