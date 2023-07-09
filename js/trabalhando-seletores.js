//Exercício 1:
// 1. Criar uma tag h1 e inserir um texto.
var h1 = document.createElement('h1');
h1.innerText = 'Aprendendo DOM.';
document.body.appendChild(h1);

// 2: Criar uma tag script ao final da tag body.
var script = document.createElement('script');
document.body.appendChild(script);

// 3: Dentro da tag script acesse o elemento window.
console.log(window.location.href); // Resultado esperado: URL da página

// 4: Agora, acesse o elemento document.
window.document;

// 5: Para finalizar, selecione o primeiro elemento h1 da sua página.
const primeiroH1 = document.querySelector('h1');
console.log(primeiroH1.innerText); // Resultado esperado: Aprendendo DOM.


//Exercício 2:
// 1. Pense na seguinte situação: É necessário acessar um elemento pelo id.
const titleElement = document.getElementById('title');
console.log(titleElement.innerText); // Resultado esperado: Aprendendo DOM.

//Exercício 3
// 1. Precisamos acessar o primeiro elemento da página que contenha a classe .title.
const primeiraClasseTitle = document.querySelector('.title');
console.log(primeiraClasseTitle.outerHTML); // Resultado esperado: <h1 class="title">Aprendendo DOM</h1>