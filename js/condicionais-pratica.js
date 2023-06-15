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
let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor:"));
let valor3 = parseInt(prompt("Digite o terceiro valor:"));

// Verificar se os valores são diferentes
if (valor1 !== valor2 && valor1 !== valor3 && valor2 !== valor3) {
    // Ordenar os valores em ordem decrescente
    let maior, meio, menor;
  
    if (valor1 > valor2 && valor1 > valor3) {
      maior = valor1;
      if (valor2 > valor3) {
        meio = valor2;
        menor = valor3;
      } else {
        meio = valor3;
        menor = valor2;
      }
    } else if (valor2 > valor3) {
      maior = valor2;
      if (valor1 > valor3) {
        meio = valor1;
        menor = valor3;
      } else {
        meio = valor3;
        menor = valor1;
      }
    } else {
      maior = valor3;
      meio = valor2;
      menor = valor1;
    }
  
    // Exibir os valores em ordem decrescente
    console.log("Os valores em ordem decrescente são:");
    console.log(maior);
    console.log(meio);
    console.log(menor);
  } else {
    console.log("Os valores informados não são diferentes.");
  }

  //Exercicio 5
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
alert(`O primeiro número (${numero1}) é maior que o segundo número (${numero2}).`);
} else if (numero2 > numero1) {
alert(`O segundo número (${numero2}) é maior que o primeiro número (${numero1}).`);
} else {
alert("Os números são iguais.");
}