/*
Exercícios⁠
1) Escreva uma função que receba uma lista a de dimensão 30 composta apenas por números inteiros. 
A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.
Exemplos de saída: ⁠A lista recebida possui x elementos pares e y elementos ímpares.
*/
/*
const lista = [23, 45, 12, 78, 36, 9, 52, 67, 18, 31, 59, 81, 44, 6, 97, 22, 73, 10, 51, 68, 3, 88, 29, 41, 65, 17, 94, 55, 80, 27];

function contarParesImpares(lista) {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  return `A lista recebida possui ${pares} elementos pares e ${impares} elementos ímpares.`;
}

const resultado = contarParesImpares(lista);
console.log(resultado);


2) Escreva uma função que recebe uma lista b de tamanho 10, composta por números inteiros.⁠
Retorne o total de elementos ímpares existentes na matriz 
e também o percentual do valor total de números ímpares em relação à quantidade total de elementos armazenados na matriz.
Retorne o seguinte texto: "O total de valores ímpares é x e corresponde a y% da lista"
*/
const listB = [57, 87, 92, 1, 36, 29, 48, 44, 52, 66];

function contarNumerosImpares(lista) {
    let totalImpares = 0;
  
    // Itera sobre os elementos da lista
    for (let i = 0; i < lista.length; i++) {
      // Verifica se o elemento é ímpar
      if (lista[i] % 2 !== 0) {
        totalImpares++;
      }
    }
  
    // Calcula o percentual de números ímpares em relação ao tamanho total da lista
    const percentualImpares = (totalImpares / lista.length) * 100;
  
    // Retorna a mensagem formatada com o total de valores ímpares e o percentual correspondente
    return `O total de valores ímpares é ${totalImpares} e corresponde a ${percentualImpares.toFixed(2)}% da lista.`;
  }
  
  console.log(contarNumerosImpares(listB));
/*
3) Escreva uma função que receba como parâmetro duas listas a e b, cada uma com dez elementos. 
⁠A função deve realizar a validação do tamanho da lista. 
Caso sejam maiores ou menores que 10, retorne: "Lista fora dos padrões necessários".

A lista a deve ser composta por valores divisíveis por 2 e 3, enquanto a lista b deve ser composta apenar por valores múltiplos de 5. ⁠A composição das listas deve ser validada pela função. Caso a composição não esteja correta, retorne: "Valores não permitidos encontrados".
*/
// Declaração das listas
const listATenElements = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const listBTenElements = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function generateList(listA, listB) {
  const checkListPattern = listA.length !== 10 || listB.length !== 10;

  // Verifica se as listas têm o tamanho correto
  if (checkListPattern) {
    return "Lista fora dos padrões necessários";
  }

  const listC = []; // Cria uma nova lista vazia

  // Itera pelos elementos das listas A e B
  for (let index = 0; index < 10; index++) {
    const elementA = listA[index]; // Obtém o elemento atual da lista A
    const elementB = listB[index]; // Obtém o elemento atual da lista B

    // Verifica se os elementos respeitam as condições necessárias
    if (elementA % 2 !== 0 || elementA % 3 !== 0 || elementB % 5 !== 0) {
      return "Valores não permitidos encontrados";
    }

    // Adiciona os elementos na lista C
    listC.push(elementA, elementB);
  }

  return listC; // Retorna a lista C com os elementos combinados
}

console.log("3.", generateList(listATenElements, listBTenElements));