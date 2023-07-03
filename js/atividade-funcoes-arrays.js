/*
Exercícios
Todos exercícios a seguir são baseados na lista a seguir:

1) Escreva uma função chamada retornaTodosElementos que não recebe nenhum parâmetro. Sempre que chamada, a função deverá alertar a lista listaDeElementos em tela.
*/
const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];

function retornaTodosElementos() {
    return listaDeElementos; //Retorna o array "listaDeElementos"
}

console.log(retornaTodosElementos()); //Executa a função retornaTodosElementos() e imprime seu retorno no console

/*
2) Escreva uma função chamada retornaValorEpecifico. A função deve receber um valor inteiro como parâmetro. Use o valor recebido para acessar a posição na lista e retorne o valor contido na posição.

Desta forma: "O valor contido nesta posição é: x".
*/
function retornaValorEspecifico(indice) {
    // Verifica se o índice é válido, ou seja, se está dentro dos limites da lista
    if (indice >= 0 && indice < listaDeElementos.length) {
        // Obtém o valor correspondente ao índice fornecido
        const valor = listaDeElementos[indice];
        // Retorna uma string formatada com o valor obtido
        return `O valor contido nesta posição é: ${valor}`;
    } else {
        // Retorna uma mensagem de índice inválido se o índice estiver fora dos limites da lista
        return "Índice inválido";
    }
}

// Chama a função passando o índice desejado e exibe o resultado no console
console.log(retornaValorEspecifico(2));

/*
3) Escreva uma função chamada retornarTipoElemento. A função deve receber um valor inteiro como parâmetro.
Use o valor recebido para acessar a posição na lista. Alerte qual o tipo do elemento contido na posição (use o typeof para isso).
Se for do tipo texto alerte: "O elemento x é um elemento do tipo texto",
Se for número alerte: "O elemento x é um elemento do tipo número"
*/
function retornarTipoElemento(number) { //Declara a função com o recebimento do parâmetro number
    let result = ""; //Declara a variavel result, iniciando com o valor "" (string vazia)

    for (let i = 0; i < listaDeElementos.length; i++) { //Utiliza o laço de repetição for para percorrer a listaDeElementos

        if (i === number && typeof listaDeElementos[i] === "string") { //Verifica se o indice atual corresponde ao numero recebido por parametro e se o valor no indice atual é uma string
            result = `O elemento ${listaDeElementos[i]} é um elemento do tipo texto`;
        }

        else if (i === number && typeof listaDeElementos[i] === "number") {   //Verifica se o indice atual corresponde ao numero recebido por parametro e se o valor no indice atual é um numero
            result = `O elemento ${listaDeElementos[i]} é um elemento do tipo número`;
        }

    }
    return result; //Retorna o valor armazenado na variável result
}

console.log(retornarTipoElemento(4));

/*
4) Escreva uma função removeUltimoElementoString. A função não recebe parâmetros.
Quando chamada, a função deverá remover o último elemento da lista, mas somente se for uma string.
Caso a remoção seja realizada, retorne: "Elemento deletado com sucesso".
Caso contrário: "Falha ao remover o elemento da lista".
*/
function removeUltimoElementoString() {
    let result = "";
    if (typeof (listaDeElementos[listaDeElementos.length - 1]) === "string") {
        listaDeElementos.pop()
        result = "Elemento deletado com sucesso"
    } else {
        result = "Falha ao remover o elemento da lista"
    }
    return result
}

console.log(removeUltimoElementoString());


/*
5) Escreva uma função chamada consultaPosição. A função deve receber um valor como parâmetro. Identifique na lista qual a posição do elemento.
Caso consiga identificar o elemento na lista: "O valor procurado está na posição: x ".
⁠Caso não: "Valor não encontrado".
const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];
*/
function consultaPosição(valor) {
    let result = "";

    for (let i = 0; i < listaDeElementos.length; i++) {
        if (valor === listaDeElementos[i]) {
            result = `O valor procurado está na posição: ${i}`;
            return result;
        }
    }

    return result = `Valor não encontrado`;

}
console.log(consultaPosição(7))

/* 
6) Escreva uma função chamada removerElementoEspecifico. A função deve receber um valor como parâmetro.
O valor recebido representa o elemento a ser deletado. 
⁠Busque a posição do elemento na lista (use o indexOf()). Use a posição encontrada para realizar a remoção.
Caso a remoção seja realizada, retorne: "Elemento x deletado com sucesso".
Caso contrário, retorne: "Elemento não encontrado".
const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"]; 
*/
//Declara a função cremoverElementoEspecifico com o recebimento do parametro "valor"
function removerElementoEspecifico(valor) {
    //Veifica se o valor está incluso dentro da listaDeElementos 
    if (listaDeElementos.includes(valor)) {
        //Recupera o index do valor através do método indexOf() e remove apenas o elemento localizado no indice, com o método splice()
        listaDeElementos.splice(listaDeElementos.indexOf(valor), 1);
        // Retorna a mesagem de feedback
        return `Elemento ${valor} deletado com sucesso`;
    }
    // Se o return de dentro do laço de repetição não for executado, será executado esse retorno
    return `Elemento não encontrado.`;
}
//Executa a função consultaPosição(), passando por parâmetro o valor numérico 7, e imprime seu retorno no console
console.log(removerElementoEspecifico(7));

/*
7) Escreva uma função chamada inserirNaPosicaoCorreta. A função pode receber um valor de 0 a 10 ou uma string.
Caso o valor recebido seja do tipo número, a função deve conseguir inserir o elemento na primeira posição da lista, caso seja um texto a inserção deve ser feita na última posição.
Retorne: 

const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"]; 
*/
function inserirNaPosicaoCorreta(text) {
    
    if (typeof text === "number") {
        listaDeElementos.unshift(text);
    } else if (typeof text === "string") {
        listaDeElementos.push(text);
    }

    return listaDeElementos;
}

console.log(inserirNaPosicaoCorreta(5));

    