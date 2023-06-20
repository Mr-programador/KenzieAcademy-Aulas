//Exercício 1
//Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.

function tumb (numero) {
    if (numero > 0) {
    return 'P';
    } else {
    return 'N';
    }
}

console.log(tumb(1));

//Exercício 2
//Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.

function contarDigitos(numero) {
    if (numero === 0) {
      return 1; // Se o número for zero, possui apenas um dígito
    }
  
    let numAbsoluto = Math.abs(numero); // Consideramos apenas o valor absoluto do número
    let numString = String(numAbsoluto); // Convertemos o número para uma string
    return numString.length; // Retornamos o comprimento da string (quantidade de dígitos)
  }

  console.log(contarDigitos(230))

//Exercício 3
//Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo. Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."

function soma(num1, num2){
    if(num1 > num2){
       return num1 + num2;
    }else{
        "O primeiro número não é maior que o segundo."
    }
}

console.log(soma(3,2));

//Exercício 4
//Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.

function checkLetra(palavra, letra) {
    return palavra.charAt(0).toLowerCase() === letra.toLowerCase();
  }
  
  console.log(checkLetra("Maicon", "M"));  // Saída: true

//Exercício 5
//Desenvolva uma função com o parâmetro horaAtendimento para saber se o horário corresponde com o funcionamento do /pergunta. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 23, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento."

function programacao(horaAtendimento){
    if (horaAtendimento >= 11 && horaAtendimento <= 23){
        return "O /pergunta está em horário de funcionamento."
    }else{
        return "O /pergunta não está em horário de funcionamento."
    }
}

console.log(programacao(10))