/* 
Exercício 1
Desenvolva uma função chamada verticalText, que receberá uma string como parâmetro. A função deverá imprimir a palavra de forma vertical usando o console.log.
*/
/* function verticalText(palavra) {
    let i = 0;
    while (i < palavra.length) {  // Enquanto i for menor que o comprimento da palavra
      console.log(palavra.charAt(i));  // Imprime o caractere na posição i
      i++;  // Incrementa o valor de i para passar para o próximo caractere
    }
  }

verticalText("vertical"); */

/*
Exercício 2
Desenvolva uma função chamada incrementText, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando, começando somente pela primeira letra, depois a primeira e a segunda e assim sucessivamente conforme exemplo.
*/
/*
function incrementText(word) {
    let increment = ""; // Variável para armazenar a palavra incrementada
    let i = 0; // Variável de controle para iterar pelos caracteres da palavra
  
    while (i < word.length) {
      increment += word.charAt(i); // Concatena a letra atual à palavra incrementada
      console.log(increment); // Imprime a palavra incrementada no console
      i++; // Incrementa o contador para passar para o próximo caractere
    }
  }
  
  // Exemplo de uso
  incrementText("Maicon");

Exercício 3​
Desenvolva uma função chamada incrementTextBackwards, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando ao contrário, começando somente pela última letra, depois a última e a penúltimo e assim sucessivamente conforme exemplo
*/
/*
function incrementTextBackwards(word) {
    let increment = ""; // Variável para armazenar a palavra incrementada ao contrário
    let i = word.length - 1; // Inicializa o contador com a posição da última letra da palavra
  
    while (i >= 0) {
      increment = word.charAt(i) + increment; // Concatena a letra atual à palavra incrementada (ao contrário)
      console.log(increment); // Imprime a palavra incrementada no console
      i--; // Decrementa o contador para passar para o próximo caractere (ao contrário)
    }
  }
  
  // Exemplo de uso
  incrementTextBackwards("Rodrigues");

Exercício 4
​Desenvolva uma função chamada padEnd, que receberá três parâmetros: uma palavra (string), a quantidade de repetição do caractere (number) e o caractere de repetição (string).
Sua função deverá retornar a string preenchida com o caractere de acordo com o comprimento passado por parâmetro. 
*/
/* 
function padEnd(palavra, repeticoes, caractere) {
  let palavraPreenchida = palavra; // Inicializa a variável palavraPreenchida com a palavra original
  let contador = 0; // Inicializa o contador para controlar o número de repetições

  while (contador < repeticoes) { // Executa o loop enquanto o contador for menor que o número de repetições
    palavraPreenchida += caractere; // Concatena o caractere à palavra preenchida
    contador++; // Incrementa o contador em 1 para acompanhar as repetições
  }

  return palavraPreenchida; // Retorna a palavra preenchida com o caractere repetido
}

console.log(padEnd("Kenzie", 5, "foo"));

Exercício 5
Desenvolva uma função chamada subString, que receberá três parâmetros: uma palavra (string), a posição inicial (number) e a posição final (number). Sua função deverá retornar a parte da string **entre** o início e o fim dos índices passados por parâmetro (não incluindo os caracteres dos próprios índices). 
*/
/* 
function subString(palavra, posicaoInicial, posicaoFinal) {
  let substring = ""; // Variável para armazenar a substring resultante
  let i = posicaoInicial + 1; // Inicializa o contador i com a posição seguinte à posição inicial

  while (i < posicaoFinal) { // Executa o loop enquanto i for menor que a posição final
    substring += palavra[i]; // Concatena o caractere correspondente à posição i à substring
    i++; // Incrementa o contador i em 1
  }

  return substring; // Retorna a substring resultante
}

console.log(subString("Mozilla", 0, 4));


Exercício 6
Desenvolva uma função chamada stringRepeater, que receberá dois parâmetros: uma palavra ou frase (string) e a quantidade de repetição (number). Sua função deverá retornar uma nova string que contem o número especificado de cópias concatenadas da palavra passada por parâmetro. 
*/
/* 
function repetirString(palavra, quantidade) {
  let repeteString = "";
  let cont = 0;

  while (cont< quantidade) {
    repeteString += palavra;
    cont++;
  }

  return repeteString;
}

console.log(repetirString("Because I'm happy. ", 3));


Exercício 7
Desenvolva uma função chamada stringCentralizer, que receberá três parâmetros:​ uma palavra (string), a quantidade de repetição do elemento (number) e o elemento de repetição (string).
Sua função deverá retornar uma nova string que contem a palavra passada por parâmetro centralizada entre os elementos de repetição com um espaço em branco nas laterais e a quantidade exata passada por parâmetro. 
*/
function stringCentralizer(word, repetition, element) {
  const totalLength = word.length + 2 * repetition;
  const leftPadding = Math.floor((totalLength - word.length) / 2);
  const rightPadding = totalLength - word.length - leftPadding;

  let centeredString = '';

  let i = 0;
  while (i < leftPadding) {
    centeredString += element;
    i++;
  }

  centeredString += ' ' + word + ' ';

  let j = 0;
  while (j < rightPadding) {
    centeredString += element;
    j++;
  }

  return centeredString;
}

// Exemplo de uso:
const centeredString = stringCentralizer("JavaScript", 8, "=");
console.log(centeredString);