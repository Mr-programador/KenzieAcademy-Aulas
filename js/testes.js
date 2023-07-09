let listaAlunos = [{
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

//Acessando propriedades do objeto:
/*
console.log(listaAlunos[0].nome); // Saída: João
console.log(listaAlunos[0].turno);
console.log(listaAlunos[0].mediaCorte);
console.log(listaAlunos[0].curso); // Saída: Ciencia da Computação
console.log(listaAlunos[0].materias);
 */

//Acessando a lista de matérias de um aluno:
/*
let materiasDoAluno = listaAlunos[0].materias;
console.log(materiasDoAluno); // Saída: Array contendo as matérias do aluno */

//Acessando propriedades de uma matéria específica:
/*
console.log(listaAlunos[0].materias[0].nome); // Saída: Calculo I
console.log(listaAlunos[0].materias[0].avaliacoes);
console.log(listaAlunos[0].materias[1].nome);
console.log(listaAlunos[0].materias[1].avaliacoes);
console.log(listaAlunos[0].materias[2].nome);
console.log(listaAlunos[0].materias[2].avaliacoes); // Saída: Array de avaliações da matéria Linguagem Orientada a Objetos
console.log(listaAlunos[0].materias[3].nome);
console.log(listaAlunos[0].materias[3].avaliacoes);
*/

//Iterando sobre as matérias e exibindo os nomes:
/* 
for (let i = 0; i < listaAlunos[0].materias.length; i++) {
  console.log(listaAlunos[0].materias[i].nome);
} 
*/
// Saída:
// Calculo I
// Pensamento Computacional
// Linguagem Orientada a Objetos
// Arquitetura de Organização de Computadores

//Calculando a média de notas de uma matéria:
/* let notas = listaAlunos[0].materias[0].avaliacoes;
let qntNotas = notas.length;
let somaNotas = 0;

for (let nota of notas) {
    somaNotas += nota;
}

let media = somaNotas / qntNotas;
console.log(media); // Saída: 8 */

//Valor ternario
function testernario(valor){
    return valor >= 18 ? 'Pode beber': valor < 18 && valor >= 12 ? 'Não pode beber' : 'Vai dormir piralho(a)'  
}

console.log(testernario(27))

