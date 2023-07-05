//1ª Parte: Modelagem

const pessoa = {
    nome: 'Maicon',
    genero: 'Masculino',
    dataNascimento: new Date(1995, 5, 15),
    documentacao: {
        cpf: '02727977230',
        rg: '123456789',
        possuiCNH: true,
        cnh: {
            tipo: 'B',
            expedicao: new Date(2015, 8, 10),
            validade: new Date(2025, 8, 10)
        }
    },
    endereco: {
        rua: 'Travessa Riga',
        numero: 91,
        complemento: 'Quadra 500',
        bairro: 'Nova Cidade',
        cidade: 'Manaus',
        estado: 'Amazonas',
        cep: '69097-246',
        pontoReferencia: 'E.E. Professor Dorval Varela Moura'
    },
    telefone: {
        residencial: '(92) 3667-3642',
        celular: '(92) 99325-9254'
    },
    email: 'mrprogramador@outlook.com'
};


const escola = {
    nome: 'E.E. Professor Dorval Varela Moura',
    cnpj: '12.345.678/0001-90',
    areaAtuacao: 'Educação',
    cidade: 'Manaus',
    estado: 'Amazonas',
    logradouro: 'Rua das Flores, 123',
    curso: 'Ensino Fundamental'
};

const curso = {
    nome: 'Informática',
    duracaoAnos: 1,
    turma: 'C',
    modulos: 4
}

const endereco = {
    cidade: 'Manaus',
    estado: 'Amazonas',
    pontoReferencia: 'E.E. Professor Dorval Varela Moura',
    cep: '69097-246'
}

//2ª Parte: Manipulação - Estacionamento

/* 
1)Escreva uma função chamada obterPlaca. A função, quando chamada, deve retornar a placa do carro.
Exemplo de chamada da função: obterPlaca()
Saída: "ABC123"
*/

const carro = {
    placa: "ABC123",
    classes: ["sedan"],
    luxo: true,
    potencia: 200,
    estacionado: true
}

function obterPlaca() {
    console.log(carro.placa);
}

obterPlaca()

/* 
2) Escreva uma função chamada verificarClasses. A função, quando chamada, deve retornar a(s) classe(s) do carro. Perceba que a propriedade é um array - quando o array possuir apenas um elemento, retorne somente o valor do elemento, e quando o array possuir mais de um elemento, retorne todo o array.
Exemplo de chamada da função: verificarClasses()
Saída: "sedan"
*/

function verificarClasses() {
    console.log(carro.classes[0])
}

verificarClasses()

/* 
3) Escreva uma função chamada potenciaReal. A função, quando chamada, deve retornar a potência real do carro. Caso o carro tenha a propriedade luxo definida como true, o valor da propriedade potencia é elevado ao quadrado. Retorne o valor da potência do carro.
Exemplo de chamada da função: potenciaReal()
Saída: 40000
*/

function potenciaReal() {
    let potenciaTotal = carro.potencia ** 2;
    if (carro.luxo === true) {
        console.log(potenciaTotal);
    }
}

potenciaReal()

/* 
4) Escreva uma função chamada adicionarNovaClasse. A função deve receber uma string como parâmetro. A função realiza a adição de mais uma classe na lista de classes do carro. Cada carro pode ter no máximo 3 classes. Antes de adicionar uma classe, verifique se o tamanho da lista de classes é maior que 3. Caso seja maior, retorne: "Este carro não pode ter mais classes".
Caso seja menor, a função deverá verificar se o valor recebido é semelhante a algum valor permitido. As classes permitidas são: 'sedan', 'hatchback', 'suv', 'crossover' e 'cupê'.
Se o valor for permitido, a função deve verificar se o valor é semelhante a algum valor já contido no objeto.
Se sim, retorne: "O carro já possui a classe x". Caso seja diferente, retorne: "Classe x adicionada com sucesso". Onde x é o valor da classe.
Exemplo de chamada da função: adicionarNovaClasse('cupê')
Saída: "Classe cupê adicionada com sucesso" 
*/

function adicionarNovaClasse(novaClasse) {
    const classesPermitidas = ["sedan", "hatchback", "suv", "crossover", "cupê"];

    if (carro.classes.length > 3) {
        return "Este carro não pode ter mais classes";
    }

    if (!classesPermitidas.includes(novaClasse)) {
        return "Classe não permitida";
    }

    if (carro.classes.includes(novaClasse)) {
        return `O carro já possui a classe ${novaClasse}`;
    }

    carro.classes.push(novaClasse);
    return `Classe ${novaClasse} adicionada com sucesso`;
}

const result = adicionarNovaClasse('cupê');
console.log(result);

/*
5) ⁠Escreva uma função chamada naoMaisLuxo. A função deve verificar se o carro está estacionado e se o atributo "luxo" está é verdadeiro. Se o carro não estiver estacionado, a função deve retornar "O carro {placa do carro} não está estacionado". Se o carro não possuir o atributo luxo verdadeiro, a função deve retornar "O carro {placa do carro} não é luxoso.". Caso contrário, se ambas as condições forem verdadeiras, a função deve retornar "O carro {placa do carro} não é mais considerado um carro de luxo".
Exemplo de chamada da função: naoMaisLuxo()
Saída: "O carro ABC123 não é mais considerado um carro de luxo" 
*/

function naoMaisLuxo(){
    if (!carro.estacionado){
        return `O carro ${carro.placa} não está estacionado.`;
    }else if(!carro.luxo){
        return `O carro ${carro.placa} não é luxuoso.`;
    }
    return `O carro ${carro.placa} não é mais considerado um carro de luxo.`;
}

const resultado5 = naoMaisLuxo();
console.log(resultado5);