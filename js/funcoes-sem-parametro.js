/*
Exercício 1
Desenvolva uma função que mostre no console a frase "Hello World!".

function frase(){
    console.log("Hello World!");
}

frase()

Exercício 2
Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
Requisitos:
100 de Entregas
100 de Entrevistas Técnicas
100 de Presença
Se os requisitos forem atingidos, mostre no console "Possível monitor(a)." Se os requisitos não forem atingidos, mostre no console "Selecionar outro(a) aluno(a)."

function verificarMonitor() {
    var entregas = 100;
    var entrevistasTecnicas = 100;
    var presenca = 100;
  
    if (entregas >= 100 && entrevistasTecnicas >= 100 && presenca >= 100) {
      console.log("Possível monitor(a).");
    } else {
      console.log("Selecionar outro(a) aluno(a).");
    }
  }
  
  verificarMonitor();

Exercício 3
Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.
function MaiorNum (){
  let num1 = 6;
  let num2 = 6;
  let num3 = 6;

  if(num1 > num2 && num2 >= num3){
    console.log(`O número ${num1} é o maior número`);
  }else if(num1 > num2 && num2 <= num3){
    console.log(`O número ${num1} é o maior número`);
  }else if (num2 > num3 && num3 <= num1){
    console.log(`O número ${num2} é o maior número`);
  }else if (num2 > num3 && num3 >= num1){
    console.log(`O número ${num2} é o maior número`);
  }else if((num3 > num1 && num1 >= num2)){
    console.log(`O número ${num3} é o maior número`);
  }else if((num3 > num1 && num1 <= num2)){
      console.log(`O número ${num3} é o maior número`);
  }else{
    console.log("Os números são iguais");
  }
}

MaiorNum()

Exercício 4
Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".
Declare as seguintes variáveis dentro da função:
nome
sobrenome
idade


function dados(){
  let nome = "Maicon";
  let sobrenome = "Rodrigues";
  let idade = 28;

  console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${28} anos`);
}
 dados()
 */