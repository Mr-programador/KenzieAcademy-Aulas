/*
Exercícios
1) Escreva uma função que consiga inserir novos elementos em uma lista. 
A lista pode armazenar no máximo 10 elementos. 
⁠Elementos do tipo string com mais de 7 caracteres não são permitidos.
Em caso de sucesso, retorne:
"Elemento inserido com sucesso, a lista agora é: x"
sendo x lista atualizada.
Em caso de falha, retorne: "Não foi possível inserir este valor"
*/
/*
function inserirElemento(lista, elemento) {
    if (lista.length >= 10) {
      return "Não foi possível inserir este valor";
    }
  
    if (typeof elemento !== 'string' || elemento.length > 7) {
      return "Não foi possível inserir este valor";
    }
  
    lista.push(elemento);
  
    return `Elemento inserido com sucesso, a lista agora é: ${lista}`;
  }
  
  // Exemplo de chamada da função
  const minhaLista = ['maçã', 'pêra', 'banana', 'laranja', 'abacaxí', 'abacate'];
  
  console.log(inserirElemento(minhaLista, 'goiaba'));


2) Escreva uma função que recebe uma lista a como parâmetro. 
A lista a deve ter exatamente 15 elementos inteiros. 
⁠Crie também uma lista b de mesmo tipo, observando a seguinte lei de formação:
"Todo elemento da matriz b deve ser o quadrado do elemento da matriz a correspondente".
Retorne a lista b resultante.
*/
const listaA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function gerarListaB(lista) {
  if (lista.length !== 15) {
    return "A lista deve ter exatamente 15 números";
  }

  const listaB = [];

  for (let i = 0; i < lista.length; i++) {
    const elementoAoQuadrado = lista[i] ** 2;
    listaB.push(elementoAoQuadrado);
  }

  return listaB;
}

console.log(gerarListaB(listaA));