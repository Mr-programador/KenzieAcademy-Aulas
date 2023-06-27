//Introdução
/*
Nesta lista de exercícios você desenvolverá suas habilidades usando os conceitos aprendidos sobre a estrutura de repetição for.Você deverá desenvolver uma função para cada exercício. Dê nomes para as funções de acordo com suas funcionalidades.

Escreva uma função que apresente como resultado os quadrados dos números inteiros existentes na faixa de valores de 15 a 200.
chamada da função: nome_da_sua_funcao()
Saída: 225, 256, 289 ...40000
*/
function quadrados_dos_numeros(){
    for(let i = 15; i <= 200; i++){
        console.log(i*i);
    }
}
quadrados_dos_numeros();
/*
Escreva uma função que apresente a soma dos cem primeiros números naturais.
(1+2+3+...+98+99+100).
chamada da função: nome_da_sua_funcao()
Saída: 5.050
*/
function soma_dos_cem(){
    let soma = 0;
    for(let i = 0; i <= 100; i++){
        soma += i;
        console.log(soma);
    }
}
soma_dos_cem();
/*
Escreva uma função que apresente todos os valores numéricos menores que 200 que são divisíveis por 4.
chamada da função: nome_da_sua_funcao()
Saída: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ...196
*/
function divide_por_quatro(){
    for(let i = 0; i < 200; i++){
        if(i % 4 == 0){
            console.log(i);
        }
    }
}
divide_por_quatro();

/*
Escreva uma função que calcule o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 até 70.
soma = 50+52+54...+70
média_aritmética = soma / qtd_numeros_pares_no_intervalo⁠⁠
chamada da função: funcao_o_nome_da_sua_funcao()
Saída: A soma é 660 e a média é 60.
*/

function calcularSomaEMedia() {
    let soma = 0;
    let quantidadePares = 0;
  
    for (let i = 50; i <= 70; i += 2) {
      soma += i;
      quantidadePares++;
    }
  
    let media = soma / quantidadePares;
  
    console.log("A soma é", soma, "e a média é", media.toFixed(2));
  }
  
  calcularSomaEMedia();

  
  
  
  
  
  
  