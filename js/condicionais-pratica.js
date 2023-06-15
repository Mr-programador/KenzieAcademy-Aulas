//Exercicio 1
let a = 5;
let b = 10;
let c = 13;

let soma = a + b;

if (soma < c) {
  console.log(`${a} + ${b} é menor que ${c}`);
} else {
  console.log(`${a} + ${b} não é menor que ${c}`);
}

//Exercicio 2
let numero = 10;
if (numero % 2 === 0) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }

//Exercicio 3
let boo = true;
let boo2 = true;

if (boo === true && boo2 === true){
    console.log ("Ambos os valores são verdadeiros")
}else{
    console.log ("Tem um valor falso");
}

//Exercicio 4
let valor1 = 10;
let valor2 = 30;
let valor3 = 40;

//Cobrindo o valor inteiros e diferentes e mostrando em ordem

//abc
if(a > b && b > c){
    console.log(`${c} < ${b} < ${a}`);
}
//bac
else if(c > a && a > b){
    console.log(`${b} < ${a} < ${c}`);
}
//cab
else if(b > a && a > c){
    console.log(`${c} < ${a} < ${b}`);
}
//acb
else if(b > c && c > a){
    console.log(`${a} < ${c} < ${b}`);
}
//bca
else if(a > c && c > b){
    console.log(`${b} < ${c} < ${a}`);
}
//cba
else if(a > b && b > c){
    console.log(`${c} < ${b} < ${a}`);
}

//Exercicio 5
let numero1 = 10;
let numero2 = 20;

if (numero1 > numero2) {
    console.log(`O primeiro número (${numero1}) é maior que o segundo número (${numero2}).`);
} else if (numero2 > numero1) {
    console.log(`O segundo número (${numero2}) é maior que o primeiro número (${numero1}).`);
} else {
    console.log("Os números são iguais.");
}