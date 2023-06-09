//Introdução
//Exercícios sobre a estrutura de repetição for.

/*
1) Escreva uma função chamada renderUpToTwenty. Quando a função for chamada, os números de 0 a 20 devem ser impressos no console.
Chamada da função: renderUpToTwenty()
saída: 0,1,2,3,4,5...20
*/
function renderUpToTwenty() {
  for (let num = 0; num <= 20; num++) {
    console.log(num);
  }
}

renderUpToTwenty(20);

/*
2) Escreva uma função chamada tenInTenToAHundred(). Quando a função for chamada, os números de 10 a 100, contando de 10 em 10, devem ser impressos no console.
Chamada da função: ⁠tenInTenToAHundred()
Saída: 10,20,30,40,50... 100
*/
function tenInTenToAHundred() {
  for (let i = 10; i <= 100; i += 10) {
    console.log(i);
  }
}

tenInTenToAHundred();

/*
3) Escreva uma função chamada oddUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem ímpares.
Chamada da função: oddUpToTwenty()
Saída: 1,3,5,7,9 ...19
*/
function oddUpToTwenty() {
  for (i = 1; i <= 20; i++) { //loop ate 20.
    if (i % 2 !== 0) { //mostrando impares.
      console.log(i);
    }
  }
}
oddUpToTwenty();
/*
4) Escreva uma função chamada evenUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem pares.
Chamada da função: evenUpToTwenty()
Saída: 0,2,4,6,8 ...20
*/
function evenUpToTwenty(){
  for(i = 0; i <= 20; i++){//loop ate 20.
    if(i%2 == 0){//mostrando impares.
      console.log(i);
    }
  }
}
evenUpToTwenty();
/*
5) Escreva uma função chamada fromNegativeToPositive(). Quando a função for chamada, apresente os valores de -10 a 0.
Chamada da função: fromNegativeToPositive()
Saída: -10,-9,-8,-7 ...0
*/
function fromNegativeToPositive(){
  for(i = -10; i <= 0; i++){
    console.log(i);
  }
}
fromNegativeToPositive()
/*
6) Escreva uma função chamada inDescendingDirection. Quando a função for chamada, apresente valores de 10 a 0 no console.
Chamada da função: inDescendingDirection()
Saída: 10,9,8,7...0
*/
function inDescendingDirection(){
  for (i = 10; i >= 0; i--){
    console.log(i);
  }
}
inDescendingDirection();
/*
7) Escreva uma função chamada toSquare(). Quando a função for chamada, apresente o quadrado dos valores da sequência de 1 a 10.
Chamada da função: toSquare()
Saída: 1,4,9,16...100
*/
function toSquare(){
  for(i = 1; i <= 10; i++){
    console.log(i*i);
  }
}
toSquare();