/* Desenvolva seu código abaixo */
function playRockPaperScissor (jogador1, jogador2){
    //Declarando as variáveis
    const pedra   = "Pedra";
    const papel   = "Papel";
    const tesoura = "Tesoura";

    //Condições de vitória do jogador1
    if ((jogador1 === "Pedra"   && jogador2 === "Tesoura") || 
        (jogador1 === "Papel"   && jogador2 === "Pedra") || 
        (jogador1 === "Tesoura" && jogador2 === "Papel")){

        return "Jogador 1 venceu!"

    //Condições de vitória do jogador2
    }else if((jogador2 === "Pedra"   && jogador1 === "Tesoura") || 
             (jogador2 === "Papel"   && jogador1 === "Pedra") || 
             (jogador2 === "Tesoura" && jogador1 === "Papel")){

        return "Jogador 2 venceu!";
    }
    //Caso não seja satisfeitas as condições significa empate, não achei necessario utilizar else.
        return "Empate!";
}
//Chamada da função Jokenpo
console.log(playRockPaperScissor("pedra", "tesoura"));