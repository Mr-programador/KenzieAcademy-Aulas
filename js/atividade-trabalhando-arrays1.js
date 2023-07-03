/* Exercícios
/* 
1) Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres. Insira o valor recebido em um array e retorne o array gerado. 
*/
function convertStringToArray(text) {
    // Verifica se o tipo de 'text' não é uma string ou se possui menos de 5 caracteres
    if (typeof text !== "string" || text.length < 5) {
      return "O texto precisa ser do tipo string e ter pelo menos 5 caracteres.";
      // Retorna uma mensagem de erro caso a condição acima seja verdadeira
    }
  
    // Retorna um array contendo o texto como seu único elemento
    return [text];
  }
  
  console.log("1.", convertStringToArray("Kenzie"));
  // resultado: 1. [ 'Kenzie' ]

/* 
2) Escreva uma função que recebe um valor do tipo number. Use o valor recebido para acessar uma posição do seguinte array:
let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠
Caso a posição exista, retorne o nome que se encontra nela. ⁠Caso não seja acessado nenhuma posição com o valor recebido, ⁠alerte: "Valor não encontrado".
*/
let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];

function findElementArray(numberParam) {
  // Verifica se o tipo de 'numberParam' não é um número
  if (typeof numberParam !== "number") {
    return "O argumento precisa ser do tipo 'number'.";
    // Retorna uma mensagem de erro caso a condição acima seja verdadeira
  }

  let element = arr[numberParam]; // Acessa o elemento do array 'arr' no índice 'numberParam'

  if (element) {
    return element; // Retorna o elemento caso ele exista no array
  }

  return "Valor não encontrado"; // Retorna uma mensagem indicando que o valor não foi encontrado
}

console.log("2.", findElementArray(2));

// Resultado: 2. Migalatéia


/* 
3) Crie um array de números, contendo os valores de 1 a 10. Crie uma função que recebe um número inteiro. 
Acesse a posição do array de números usando o valor recebido. Teste se o valor contido na posição é par ou ímpar.
Caso seja par retorne: "O valor encontrado nesta posição é par",
Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar"
*/
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkOddOrEven(integerNumber) {
    // Acessa o elemento do array 'arr3' no índice 'integerNumber'
    let element = arr3[integerNumber]; 
    // Verifica se o elemento é ímpar, atribuindo true ou false a 'checkOdd' com base na operação de módulo (%)
    let checkOdd = element % 2 !== 0; 
    // Verifica se 'checkOdd' é true
    if (checkOdd) { 
    return "O valor encontrado nesta posição é ímpar"; // Retorna uma mensagem indicando que o valor é ímpar
  }

    return "O valor encontrado nesta posição é par"; // Retorna uma mensagem indicando que o valor é par
}

console.log("3.", checkOddOrEven(2));

// Resultado: 3. O valor encontrado nesta posição é ímpar

/* 
4) Dado o array de nomes:
⁠let nomes = ["Pedro", "Rafael", "José"] ⁠
Crie uma função que recebe a lista de nomes como parâmetro. A função deve verificar qual dos nomes da lista tem a maior quantidade de caracteres e retornar o nome.
Teste cada posição usando estrutura de repetição, a menos que a lista tenha apenas um valor inserido.
Use este formato: "O nome x é o maior da lista";
*/
let nomes = ["Pedro", "Rafael", "José"];

function findBiggerName(nameList) {
  let lengthNameList = nameList.length; // Obtém o tamanho da lista de nomes
  let biggerName = nameList[0]; // Assume que o primeiro nome da lista é o maior inicialmente

  if (lengthNameList === 0) { // Verifica se a lista está vazia
    return "A lista está vazia"; // Retorna uma mensagem indicando que a lista está vazia
  }

  if (lengthNameList === 1) { // Verifica se a lista possui apenas um nome
    return `O nome ${biggerName} é o maior da lista, até por que é o único ;)`; // Retorna uma mensagem indicando que o único nome é o maior
  }

  for (let i = 1; i < lengthNameList; i++) { // Percorre a lista a partir do segundo nome
    const currentName = nameList[i]; // Obtém o nome atual na iteração
    if (currentName.length > biggerName.length) { // Verifica se o nome atual é maior que o maior nome registrado até o momento
      biggerName = currentName; // Atualiza o maior nome com o nome atual caso seja maior
    }
  }

  return `O nome ${biggerName} é o maior da lista`; // Retorna uma mensagem indicando o maior nome da lista
}

console.log("4.", findBiggerName(nomes));

// Resultado: 4. O nome Rafael é o maior da lista;


/* 
5) Dado o array de números como exemplo:
⁠numeros = [1,4,6,9,11,8]
Escreva uma função que recebe a lista de números como parâmetro. A função deve realizar a soma dos valores das duas últimas posições da lista e armazenar o valor da soma em uma variável.
Use a variável para testar se o valor da soma é um múltiplo de 2.

Se sim, retorne: "A soma é um múltiplo de 2".
Caso contrário: "A soma não é um múltiplo de 2" 
*/
let numeros = [1, 4, 6, 9, 11, 8];

function checkMultipleTwo(numberList) {
  let sumResult = 0; // Variável para armazenar o resultado da soma
  let result = false; // Variável para armazenar o resultado final
  let numberListLength = numberList.length; // Obtém o tamanho da lista de números

  if (numberListLength >= 2) { // Verifica se a lista possui pelo menos dois números
    const lastNumber = numberList[numberListLength - 1]; // Obtém o último número da lista
    const secondLastNumber = numberList[numberListLength - 2]; // Obtém o penúltimo número da lista
    sumResult = lastNumber + secondLastNumber; // Calcula a soma dos dois últimos números
    result = sumResult % 2 === 0; // Verifica se a soma é um múltiplo de 2 e atualiza o resultado final
  }

  result = sumResult % 2 === 0; // Verifica novamente se a soma é um múltiplo de 2 e atualiza o resultado final

  if (result) { // Verifica se o resultado final é verdadeiro
    return "A soma é um múltiplo de 2"; // Retorna uma mensagem indicando que a soma é um múltiplo de 2
  }

  return "A soma não é um múltiplo de 2"; // Retorna uma mensagem indicando que a soma não é um múltiplo de 2
}

console.log("5.", checkMultipleTwo(numeros));

// Resultado: 5. A soma não é um múltiplo de 2

/* 
6) Dado o array de nomes como exemplo:
⁠let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]⁠
Escreva uma função que recebe como parâmetros a lista de nomes, um nome (string) e um valor inteiro (number) para representar a posição.
Acesse a lista na posição que corresponde ao valor inteiro recebido e armazene o valor contido na posição em uma variável.
Teste se o nome recebido pela função como parâmetro é o mesmo que o armazenado na variável.
Lembre-se de normalizar os dados antes de testar.

Caso os valores sejam iguais, retorne: "Acertei".
Caso não sejam, retorne: "Não é quem eu pensava" 
*/
let nameList2 = [
    "Pedro",
    "Rafael",
    "José",
    "Carla",
    "Maria",
    "Josef",
    "Raquel",
  ];
  
  function findNameInList(list, name, index) {
    const nameToFind = name.toLowerCase(); // Converte o nome a ser encontrado para minúsculas
    const nameInList = list[index].toLowerCase(); // Converte o nome na posição do índice especificado para minúsculas
  
    if (nameToFind === nameInList) { // Verifica se o nome a ser encontrado é igual ao nome na lista (ignorando diferenças de maiúsculas e minúsculas)
      return "Acertei"; // Retorna uma mensagem indicando que o nome foi encontrado
    }
  
    return "Não é quem eu pensava"; // Retorna uma mensagem indicando que o nome não foi encontrado
  }
  
  console.log("6.", findNameInList(nameList2, "Pedro", 1));
  
  // Resultado: 6.: Não é quem eu esperava

/* 
7) Dado dois arrays numéricos como exemplo.
⁠let numeros = [1,2,3,4,5,6,10,7]
⁠let outrosNumeros = [5,7,9,4,2,3,9]

Escreva uma função que recebe as duas listas de números como parâmetro. A função deve conseguir identificar qual dos dois arrays é o maior.
Após identificar o maior array, retorne o último elemento do array.
Use este formato: "A maior lista é a lista cujo último número é: x"  
*/

let numbers = [1, 2, 3, 4, 5, 6, 10, 7];
let otherNumbers = [5, 7, 9, 4, 2, 3, 9];

function biggerList(listA, listB) {
  const sizeOfListA = listA.length; // Obtém o tamanho da lista A
  const sizeOfListB = listB.length; // Obtém o tamanho da lista B
  let biggerListSize = null; // Variável para armazenar a lista de maior tamanho
  let lastNumberOfBiggestList = null; // Variável para armazenar o último número da maior lista

  if (sizeOfListA > sizeOfListB) { // Verifica se o tamanho da lista A é maior que o tamanho da lista B
    biggerListSize = listA; // Atribui a lista A como a maior lista
  } else {
    biggerListSize = listB; // Atribui a lista B como a maior lista
  }

  lastNumberOfBiggestList = biggerListSize[biggerListSize.length - 1]; // Obtém o último número da maior lista

  return `A maior lista é a lista cujo último número é: ${lastNumberOfBiggestList}`; // Retorna uma mensagem indicando qual lista é a maior e o último número dela
}

console.log("7.", biggerList(numbers, otherNumbers));