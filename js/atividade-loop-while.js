//Melodia baseada no sinal WOW! "6EQUJ5" 'FÁ', 'RE', 'DO', 'LA', 'SOL';
function musicaEspacial(){
    const melody = new Tone.Sequence(
        (time, note) => {
        synth.triggerAttackRelease(note, "8n", time);
        },
//MODELO:"F4", "E4", "D4", "C4", "A4", "F4"
        ["F4", "E4", "D4", "C4", "A4", "F4", "-", "G4", "F4", "E4", "-", "D4", "C4", "B3", "C4", "D4", "E4", "F4", "G4", "-", "A4", "G4", "F4", "E4", "-", "D4", "C4", "A3", "C4", "E4", "F4", "A4", "C5", "E5", "C5", "A4", "-", "F4", "D4", "F4", "A4", "G4", "F4", "E4", "D4", "C4", "-", "A3", "C4", "E4", "F4", "A4", "C5", "E5", "C5", "A4", "-", "F4", "D4", "F4", "A4", "G4", "F4"]
    );
    
    // Configuração do sintetizador
    const synth = new Tone.Synth().toDestination();
    
    // Iniciar a reprodução da melodia
    Tone.Transport.bpm.value = 120; // Definir o BPM (andamento)
    Tone.Transport.start();
    melody.start(0);
}

function pararMusica() {
    Tone.Transport.stop();
    melody.dispose();
}

/*
Introdução
Exercício Resolvido
O cardápio de uma lanchonete é o seguinte:

Especificação           |       Código      |       Preço     
------------------------|-------------------|------------------
Cachorro Quente         |        101        |       R$ 1,20
Bauru Simples           |        102        |       R$ 1,30
Bauru com ovo           |        103        |       R$ 1,50
Hambúrguer              |        104        |       R$ 1,20


Calcule e alerte o total a ser pago. Considere que o cliente deve informar o número 0 quando o pedido for encerrado.
Quando o cliente entrar com um valor inválido alerte com mensagem: "Pedido indisponível" ou "Pedido não encontrado".

//Resolução

let escolha = parseInt(prompt("Digite o código do produto ou 0 para sair"))
let valorTotalDoPedido = 0
let quantidade = 0

while(escolha != 0){
    if(escolha == 100){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.20
    }else if(escolha == 101){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.30
    }else if(escolha == 102){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.50

    }else if(escolha == 103){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.20

    }else if(escolha == 104){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.30
    }else{
        alert('Produto indisponível')
    }
    escolha = parseInt(prompt("Digite o código do produto ou 0 para finalizar o pedido"))
}
alert(`Seu pedido ficou em ${valorTotalDoPedido}`)
*/

/*
Muita atenção ao desenvolver seus códigos com o laço while, pois caso se esqueça da flag de saída, ocasionará um loop infinito. Então, antes de testar, certifique-se que existe um termo de parada. ⁠

//Exercícios para praticar
/*
Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
*/

function verificarValor() {
  let valor = parseInt(prompt("Escolha um valor de 0 a 10:"));

  while (valor < 0 || valor > 10) {
    console.log("Valor inválido. Tente novamente.");
    valor = parseInt(prompt("Escolha um valor de 0 a 10:"));
  }

  console.log("Valor válido");
}

verificarValor();

/*
Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/
function login() {
    let nomeUsuario = prompt("Digite o nome de usuário:");
    let senhaUsuario = prompt("Digite a senha:");
  
    while (nomeUsuario === senhaUsuario) {
      alert("Erro! A senha não pode ser igual ao nome de usuário");
  
      nomeUsuario = prompt("Digite um novo nome de usuário:");
      senhaUsuario = prompt("Digite uma nova senha:");
    }
  
    alert("Login realizado com sucesso!");
  }
  
  login();

/*
Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média.
*/
function somarNumeros() {
    let soma = 0;
    let contador = 0;
    let numero = parseInt(prompt("Digite um número menor que 10:"));
  
    while (numero > 0 && numero < 10) {
      soma += numero;
      contador++;
  
      numero = parseInt(prompt("Digite um número menor que 10:"));
    }
  
    let media = contador > 0 ? soma / contador : 0;
  
    alert(`A soma dos números foi: ${soma} e a média foi: ${media}`);
  }
  
  somarNumeros();

/*
Faça um programa que registre votos. Em uma eleição para o grêmio estudantil existem apenas 3 candidatos, o candidato a, o candidato b e o candidato c.
*/
let votosCandidatoA = 0;
let votosCandidatoB = 0;
let votosCandidatoC = 0;

function exibirResultados() {
  console.log("Resultados da eleição:");
  console.log("Candidato A: " + votosCandidatoA + " voto(s)");
  console.log("Candidato B: " + votosCandidatoB + " voto(s)");
  console.log("Candidato C: " + votosCandidatoC + " voto(s)");
}

while (true) {
  let voto = prompt("Digite o candidato escolhido (A, B ou C), ou digite 'fim' para encerrar a votação:");

  if (voto === 'A') {
    votosCandidatoA++;
  } else if (voto === 'B') {
    votosCandidatoB++;
  } else if (voto === 'C') {
    votosCandidatoC++;
  } else if (voto === 'fim') {
    break;
  } else {
    console.log("Candidato não encontrado.");
  }
}

exibirResultados();

/*
Solicite ao usuário que entre com a letra correspondente a um candidato e incremente em +1 o número de votos para o candidato. ⁠Caso o usuário entre com um valor que não seja correspondente a um candidato, alerte: "Candidato não encontrado". 
Ao final de cada votação alerte a mensagem: "Voto registrado com sucesso". 
Para encerrar a votação é necessário que entre com uma flag (variável de controle) de parada: use o x para isso.
Quando o valor x for inserido alerte o número de votos que cada candidato teve.
*/
let votoCandidatoA = 0;
let votoCandidatoB = 0;
let votoCandidatoC = 0;

function exibirResultados() {
  console.log("Resultados da eleição:");
  console.log("Candidato A: " + votoCandidatoA + " voto(s)");
  console.log("Candidato B: " + votoCandidatoB + " voto(s)");
  console.log("Candidato C: " + votoCandidatoC + " voto(s)");
}

while (true) {
  let voto = prompt("Digite a letra correspondente ao candidato (A, B ou C), ou 'X' para encerrar a votação:");

  if (voto === 'A') {
    votoCandidatoA++;
    console.log("Voto registrado com sucesso!");
  } else if (voto === 'B') {
    votoCandidatoB++;
    console.log("Voto registrado com sucesso!");
  } else if (voto === 'C') {
    votoCandidatoC++;
    console.log("Voto registrado com sucesso!");
  } else if (voto === 'X') {
    break;
  } else {
    console.log("Candidato não encontrado.");
  }
}

exibirResultados();
