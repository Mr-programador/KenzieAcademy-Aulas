//Exercício 1
//O depurador de código misteriosamente parou de funcionar, e agora você precisa descobrir o que deve ser retornado no console.log.

function verificaNumero(num) {

    let paridade = '';

    if (num % 2 == 0) {
      paridade = 'par';
    } else {
      paridade = 'impar';
    }
  
    let sinal = '';
  
    if (num > 0) {
      sinal = 'positivo';
    } else {
      sinal = 'negativo';
    }
  
    let casasDecimais = '';
  
    if (num === parseInt(num)) {
      casasDecimais = 'não possui casas decimais';
    } else {
      casasDecimais = 'possui casas decimais';
    }
  
  
    return `O número ${num} é ${paridade}, ${sinal} e ${casasDecimais}.`;
  }
  
  console.log(verificaNumero(2.5));

/*
//Uma melhor forma de escrever esse código
  function verificaNumero(num) {
    let paridade = num % 2 === 0 ? 'par' : 'ímpar';
    let sinal = num >= 0 ? 'positivo' : 'negativo';
    let casasDecimais = Number.isInteger(num) ? 'não possui casas decimais' : 'possui casas decimais';
  
    return `O número ${num} é ${paridade}, ${sinal} e ${casasDecimais}.`;
  }
  
  console.log(verificaNumero(-12));
*/
  //Exercício 2
  //O trecho de código abaixo está realizando algumas operações matemáticas, e para se certificar de que todas elas estão funcionando como deveriam, o desenvolvedor adicionou alguns logs em seu código.
  
  let valor = 18;
  let result = valor / 2;
  console.log(result);
  
  result = result / 3;
  console.log(result);
  
  let isPair = ( result == 3 );
  console.log(isPair);
  
  if (isPair) {
    result = result * 6;
  } else {
    result = result * 12;
  }
  
  console.log(result);
 /*
//Melhor forma de escrever o codigo
  let valor = 18;
  let result = valor / 2;
  console.log(result);

  result /= 3;
  console.log(result);

  let isPair = (result === 3);
  console.log(isPair);

  if (isPair) {
    result *= 6;
  } else {
    result *= 12;
  }

  console.log(result);
*/

  //Exercício 3
  //A função abaixo recebe um número qualquer e retorna a quantidade de algarismo que o compõem. Tente descobrir o valor que será retornado em cada console.log() sem rodar o código no terminal.
  
  function algarismosEmUmNumero(n){
    let str = `${n}`; //convertente para string o valor do aprametros // n+""
    let contagem = str.length;
    console.log(contagem);
  
    if (n != parseInt(n)) {
      console.log("Entrou aqui");
      contagem = contagem - 1;
    }
  
    console.log(contagem);
  
    return contagem;
  }
  algarismosEmUmNumero(3.141517);