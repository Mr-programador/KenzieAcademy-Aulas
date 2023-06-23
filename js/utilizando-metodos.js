/*
Introdução
Nesta atividade você irá praticar utilização de métodos dos tipos primitivos.

Exercício 1
Crie uma função que recebe três parâmetros: uma frase, uma palavra antiga e uma palavra nova. A função deve buscar por todas as ocorrências da palavra antiga na frase e substituí-las pela palavra nova. Então, a função deve retornar a nova frase com o resultado da substituição. 
*/
function trocaPalavra (frase, palavraAntiga, novaPalavra){
    let novaFrase = frase.replaceAll(palavraAntiga, novaPalavra);
    return novaFrase
}

console.log(trocaPalavra("Você pode fazer qualquer coisa se colocar sua vontade para isso", "vontade", "mente"));
/*
Exercício 2
Escreva uma função em JavaScript que recebe três parâmetros numéricos: nota1, nota2 e nota3, que representam as notas de um aluno em três avaliações. A função deve calcular a média aritmética das notas e arredondar o resultado para uma casa decimal.
A função deve retornar a média arredondada em uma mensagem no seguinte formato: "A média do aluno é <media>."
*/
function mediaAluno(nota1, nota2, nota3){
    let mediaNotas = (nota1 + nota2 + nota3)/3;
    let notaInteira = mediaNotas.toFixed(); 
    return notaInteira;
}

console.log(mediaAluno(8.5,7,6));
/*
Exercício 3
Escreva uma função em JavaScript que recebe dois parâmetros numéricos: valorUnitario e quantidade, que representam o valor unitário de um produto e a quantidade comprada, respectivamente. A função deve calcular o valor total da compra, aplicando um desconto progressivo no valor unitário e formatando o resultado com duas casas decimais.
O desconto será aplicado de acordo com a quantidade comprada:
10% de desconto se a quantidade comprada for maior ou igual a 5;
20% de desconto se a quantidade comprada for maior ou igual a 10.
Em seguida, a função deve substituir o ponto por vírgula na string do valor total, e deve retornar uma mensagem no seguinte formato: "O valor total da compra é R$ <valorTotal>."
*/

function desconto(valorUnitario, quantidade){
    let valorTotal = valorUnitario * quantidade;
    let desconto10 = valorTotal - (valorTotal * 0.1);
    let desconto20 = valorTotal - (valorTotal * 0.2);

    if(quantidade > 0 && quantidade <= 4){
        return `Você comprou ${quantidade} peças e o valor total foi de: ${valorTotal.toFixed(2)} R$`;
    }else if(quantidade >= 5 && quantidade <=9){
        return `Você comprou ${quantidade} peças e o valor total foi de: ${desconto10.toFixed(2)} R$`;
    }else if(quantidade >= 10){
        return `Você comprou ${quantidade} peças e o valor total foi de: ${desconto20.toFixed(2)} R$`;
    }
    return "Valor Inválido"
    
}

//Chamada dos parametros
console.log(desconto(20, 10))