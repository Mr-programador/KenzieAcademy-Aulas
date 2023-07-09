// Exercício 1 - Pessoa Premiada
/*
Você está trabalhando na loteria federal e um cliente se aproxima e fala que foi premiado.
Os dados do ganhador já estão no sistema e você agora só deve comparar se as informações prestadas pelo suposto ganhador são realmente verdadeiras. Pegue os documentos necessários e faça a consulta.
*/
// Dados do Ganhador
let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

/*

Lembre-se que esta é uma estrutura de objeto e não de array. Sendo assim, para acessar alguma propriedade você deve usar o ..
Crie uma função que irá receber o nome e cpf do suposto ganhador.
Dentro da função você deverá comparar os dados recebidos com os dados existentes.
A função deve retornar uma string: "É ganhador!" ou "Não é ganhador!".

Desenvolva uma lógica para que o nome sempre tenha a primeira letra maiúscula e as restantes minúsculas.
Procure pelo método toUpperCase().
*/
function buscador(suspeito, cpf) {
    let nomeSuspeito = suspeito.charAt(0).toUpperCase() + suspeito.slice(1).toLowerCase();

    if (ganhador.nome === nomeSuspeito && ganhador.cpf === cpf) {
        return "É ganhador!";
    }

    return "Não é ganhador!";
}

console.log(buscador("Adamastor", "123.321.789-98"));
/*
// Exercício 2- Quem veio atrás do prêmio?
O gerente da loteria, pediu para que você guarde as informações das pessoas que vieram atrás do prêmio.
Antes você recebia o objeto e fazia a comparação. Agora você precisa armazená-lo em uma variável e inseri-lo em uma lista, mediante a uma condição.
A lista deverá ter o nome que achar mais conveniente.

Crie uma variável para guardar o objeto recebido.
Com base no exercício anterior, insira todos que não ganharam o prêmio em um array.
Crie uma função que recebe um objeto.
Crie um array e insira o objeto passado.
Retorne uma string contendo o número de pessoas que vieram atrás do prêmio, mas não eram ganhadores.
*/
let naoGanhadores = [];

function registraNaoGanhadores(ganhador) {
    if (buscador(ganhador.nome, ganhador.cpf) === 'Não é ganhador!') {
        naoGanhadores.push(ganhador);
    }

    return `${naoGanhadores.length} vieram atrás do prêmio mas não eram ganhadores.`;
}

console.log(registraNaoGanhadores({ nome: "Lucas", cpf: "987.654.321-00" }));
/* 
{
    nome: 'João',
    nascimento: '01/01/1990',
    cpf: '111.222.333-44',
    estadoCivil: 'Solteiro'
},
{
    nome: 'Maria',
    nascimento: '15/05/1988',
    cpf: '555.666.777-88',
    estadoCivil: 'Casada'
},
{
    nome: 'Pedro',
    nascimento: '10/12/1985',
    cpf: '999.888.777-66',
    estadoCivil: 'Solteiro'
},
{
    nome: 'Ana',
    nascimento: '20/09/1992',
    cpf: '444.555.666-77',
    estadoCivil: 'Divorciada'
},
{
    nome: 'Carlos',
    nascimento: '05/07/1987',
    cpf: '222.333.444-55',
    estadoCivil: 'Casado'
}
]; */