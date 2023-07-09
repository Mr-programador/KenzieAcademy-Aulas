//Exercício 1 - Verificando aprovações

//Dada a seguinte lista de alunos:
let listaAlunos = [
    {
        nome: 'João',
        curso: 'Ciencia da Computação',
        turno: 'Noturno',
        mediaCorte: 7,
        materias: [
            {
                nome: 'Calculo I',
                avaliacoes: [6, 8, 10, 8]
            },
            {
                nome: 'Pensamento Computacional',
                avaliacoes: [6, 8, 6, 8]
            },
            {
                nome: 'Linguagem Orientada a Objetos',
                avaliacoes: [7, 8, 9, 10]
            },
            {
                nome: 'Arquitetura de Organização de Computadores',
                avaliacoes: [6, 8, 7, 8]
            }
        ]
    }
]

/* 
Cada aluno é representado por um objeto, contendo os seguintes atributos:

nome;
curso;
turno;
mediaCorte;
matérias: uma lista das matérias, onde cada matéria é representada por um objeto, contendo:
nome;
avaliacoes: uma lista com as notas obtidas pelo aluno em cada avaliação realizada no semestre.

Sua tarefa é determinar em quantas matérias o aluno foi aprovado. 
Se o aluno obteve nota maior ou igual a 6, está aprovado. 
*/
let materiasAprovadas = 0;  // Variável para contar o número de matérias em que o aluno foi aprovado.
let listaDeMatérias = listaAlunos[0].materias;  // Obtém a lista de matérias do primeiro aluno da lista de alunos.

// Loop para percorrer cada matéria na lista de matérias do aluno.
for (let i = 0; i < listaDeMatérias.length; i++) { // for (let materia of listaDeMatérias) {

    let notaTotal = 0;  // Variável para armazenar a soma das notas das avaliações de uma matéria específica.

    // Loop para percorrer cada avaliação dentro de uma matéria específica.
    for (let j = 0; j < listaDeMatérias[i].avaliacoes.length; j++) { //for (let nota of materia.avaliacoes) {

        notaTotal += listaDeMatérias[i].avaliacoes[j];  // Soma a nota da avaliação atual à nota total da matéria.
    }
    // Verifica se a média das notas da matéria é maior ou igual a 6.
    if (notaTotal / listaDeMatérias[i].avaliacoes.length >= 6) {

        materiasAprovadas++;  // Incrementa o contador de matérias aprovadas.
    }
}

console.log(materiasAprovadas);

//Exercício 2 - Verificando aprovações no semestre
/* 
Sua tarefa é verificar se o aluno foi aprovado no semestre atual e poderá prosseguir para o próximo. 
Crie uma função chamada calculaMedia para saber média total do aluno, a partir das notas que ele obteve nas avaliações do semestre.
*/

function aprovacaoAluno(materia) {
    let listaDeMaterias = listaAlunos[0].materias;
    
    for (let materiaObj of listaDeMaterias) {
      if (materiaObj.nome === materia) {
        let somaNotas = 0;
        let quantidadeNotas = 0;
  
        for (let nota of materiaObj.avaliacoes) {
          somaNotas += nota;
          quantidadeNotas++;
        }
  
        let media = somaNotas / quantidadeNotas;
  
        return media >= 6 ? "Passou!" : "Reprovou!";
      }
    }
    
    return "Matéria não encontrada";
  }
  console.log(listaAlunos[0].materias[0].nome);
  console.log(aprovacaoAluno('Calculo I'));
  console.log(listaAlunos[0].materias[1].nome);
  console.log(aprovacaoAluno('Pensamento Computacional'));
  console.log(listaAlunos[0].materias[2].nome);
  console.log(aprovacaoAluno('Linguagem Orientada a Objetos'));
  console.log(listaAlunos[0].materias[3].nome);
  console.log(aprovacaoAluno('Arquitetura de Organização de Computadores'));

//Exercício 3 - Verificando destino de passageiros

//Dado o seguinte objeto onibus:
const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
        'São Paulo-SP',
        'Campinas-SP',
        'São José dos Campos-SP',
        'Volta Redonda-RJ'
    ],
    passageiros: [
        {
            nome: 'Luis da Silva',
            rg: '1234567890',
            bilhete: {
                origem: 'Curitiba-PR',
                destino: 'São José dos Campos-SP',
                poltrona: 15,
            }
        },
        {
            nome: 'João da Silva',
            rg: '1234567891',
            bilhete: {
                origem: 'São Paulo-SP',
                destino: 'Rio de Janeiro-RJ',
                poltrona: 16,
            }
        }
    ]
}


// Um ônibus possui as seguintes propriedades:
/*
capacidade: um número inteiro com a quantidade total de lugares do ônibus;
origem;
destino;
paradas: uma lista com todas as cidades em que o ônibus passa, entre a origem e o destino;
passageiros: uma lista com todos os passageiros presentes no ônibus, onde cada passageiro é representado por um objeto, contendo:
nome;
rg;
bilhete: também representado por um objeto, contendo detalhes sobre a viagem do passageiro:
origem;
destino;
poltrona.
Sua tarefa é determinar quais passageiros irão descer do ônibus em determinada parada.

Desenvolva um método que recebe a parada atual como parâmetro e verifica se é igual ao valor de paradas do objeto onibus. Esse método deverá verificar em quais passageiros o destino é igual à parada atual do ônibus.

Em seguida, deve retornar um array com todos os passageiros que irão descer na parada atual. 
*/
onibus.descida = function (paradaAtual) {
    let paradaExiste = false;
  
    for (let i = 0; i < onibus.paradas.length; i++) {
      if (paradaAtual === onibus.paradas[i] || paradaAtual === onibus.destino) {
        paradaExiste = true;
      }
    }
  
    if (paradaExiste === false) {
      return `Esse onibus não realizará paradas em ${paradaAtual}!`;
    }
  
    let passageirosDescendo = [];
    for (let i = 0; i < onibus.passageiros.length; i++) {
      if (paradaAtual === onibus.passageiros[i].bilhete.destino) {
        passageirosDescendo.push(onibus.passageiros[i]);
      }
    }
  
    return passageirosDescendo;
  };
