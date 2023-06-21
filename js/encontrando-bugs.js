/*
Introdução
Nesta atividade os códigos contém alguns bugs que podem ser solucionados. Praticando desta maneira você desenvolverá suas habilidades de analisar a lógica, debugar e corrigir os erros.

Exercício 1
Você foi contratado por uma empresa de software para corrigir alguns bugs. A empresa possui diversos produtos e precisa da sua ajuda para analisar e corrigir algumas funções.
A função calculaIMC deve receber dois parâmetros, o peso em quilogramas e a altura em metros. É necessário retornar o índice de massa corporal do usuário.
Dica: Fórmula para o cálculo é: IMC = peso / altura²
*/
function calculaIMC(peso, altura) {
  let alturaAoQuadrado = altura * altura;
  let imc = peso / altura;
}

//Ao receber 80 para o peso e 1.80 para altura, a função deve retornar 24.691358024691358
/*
Exercício 2
A função calculaIdade deve receber três parâmetros: um nome, anoFuturo, que representa um ano no futuro e anoNascimento, que representa o ano de nascimento. O objetivo dessa função é calcular a idade futura de uma pessoa tendo como base o ano de nascimento e o ano futuro.
*/
function calculaIdade(nome, anoFuturo, anoNascimento) {
  let idade = anoNascimento + anoFuturo;
  return "Em ${anoFuturo} $(nome) terá $(idade) anos de idade";
}

//Ao receber os parâmetros: ("Pedro", 2002, 2030) a função deve retornar "Em 2030 Pedro terá 28 anos de idade".
/*
Exercício 3
A função algarismosEmUmNumero deve receber como parâmetro um número inteiro ou com parte decimal e deve retornar a quantidade de algarismos que compõem esse numero.
Vale relembrar que ao realizarmos a conversão de um número para um texto, o ponto que divide a parte inteira da parte decimal é convertida junto, portanto, é necessário tratar caso o número apresente ponto flutuante.
*/
function algarismosEmUmNumero(n) {
  let str = `$(n)`;
  let contagem = str.lenght;

  if (n != parseInt(n)) {
    contagem = contagem + 1;
  }

  return n;
}

//Ao receber 3.14159265 a função deve retornar 9.
/*
Exercício 4
A função diaDaSemana deve receber por parâmetro um valor em formato de número ou texto, e retornar em texto o dia da semana que ele representa, seguindo a lista abaixo:
Domingo
Segunda-feira
Terça-feira
Quarta-feira
Quinta-feira
Sexta-feira
Sábado
Caso o número recebido por parâmetro for inválido, você deve retornar o texto: 'Valor Inválido'.
*/
function diaDaSemana(n) {
  let resultado = "";

  if (n === 1 && n === '1') {
    resultado = 'Domingo';
  } else if(n == 2 ) {
    resultado = 'Segunda-feira';
  } else if(n == '3') {
    resultado = 'Terça-feira';
  } else if(n === 4 || n === '4') {
    resultado = 'Quarta-feira';
  } else if(n = 5) {
    resultado = 'Quinta-feira';
  } else if(n = '6') {
    resultado = 'Sexta-feira'; 
  } else(n == 7) {
    resultado = 'Sábado';
  } else if() {
    resultado = 'Valor Inválido';
  }

  return resultado;
}

//Ao receber '1' a função deve retornar 'Domingo'
//Ao receber 3 a função deve retornar 'Terça-feira'
//Ao receber 0 a função deve retornar 'Valor Inválido'