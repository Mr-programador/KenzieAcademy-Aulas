//Exercício 1 - Passo a Passo

// 1. Vamos criar uma tag p utilizando o createElement.
const tag = document.createElement('p');

// 2. Agora podemos imprimir no console a variável tag.
console.log(tag);

// 3. Agora que conferimos se está tudo funcionando, vamos inserir um texto na tag p.
tag.innerText = "Olá, eu sou uma tag criada pelo JS";

// 4. Tag p criada e com seu conteúdo, agora podemos dizer em qual tag o nosso parágrafo será renderizado.
const elementoExe1 = document.querySelector('.exe1');
elementoExe1.appendChild(tag);


//Exercício 2 - Passo a Passo

// 1. Vamos iniciar criando uma tag input utilizando o createElement e armazenando em uma variável.
const criarInput = document.createElement('input');

// 2. Agora vamos inserir um placeholder.
criarInput.placeholder = "Digite seu texto aqui";

// 3. Agora temos um elemento para inserir nosso input. Vamos acessá-lo e inseri-lo em uma variável.
const form = document.querySelector('.exe3 form');

// 4. Para finalizar, iremos inserir no form o input criado anteriormente.
form.appendChild(criarInput);


// Exercício 3

//Transcreva o seguinte código HTML para Javascript utilizando os métodos de criação de elementos.
const criarArticle = document.createElement('article');

const criarH1 = document.createElement('h1');
criarH1.innerText = "Titulo do Post";
criarArticle.appendChild(criarH1);

const criarP = document.createElement('p');
criarP.innerText = "Descrição do Post";
criarArticle.appendChild(criarP);

const criarA = document.createElement('a');
criarA.innerText = "Ver post completo";
criarArticle.appendChild(criarA);

const elementoExe2 = document.querySelector('.exe2');
elementoExe2.appendChild(criarArticle);