// Atividade: Trabalhando com Objetos II

//Dada a lista de veículos:
const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
]

// Exercício 1 - Quantos veículos temos no estoque?
function listaCarros() {
    return carros.length; // Retorna o tamanho da lista de carros
}

console.log(listaCarros()); //Saída: 9 

// Exercício 2 - Quanto vale todo meu estoque de veículos?
function precoTotal(carros) {
    let valor = 0; // Variável para armazenar o valor total
    for (let i = 0; i < carros.length; i++) {
        valor += carros[i].preco; // Adiciona o preço de cada carro ao valor total
    }

    return `A soma do preço de todos os veículos é R$ ${valor.toFixed(2)}`;
}

console.log(precoTotal(carros)); //Saída: R$ 142785.09

// Exercício 3 - Procurando um veículo por marca
function filtraPorMarca(carros, marca) {
    let listaMarca = []; // Array vazio para armazenar os carros da marca especificada

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].marca === marca) { // Verifica se a marca do carro é igual à marca especificada
            listaMarca.push(carros[i]); // Adiciona o carro à listaMarca se a marca for igual
        }
    }

    return listaMarca; // Retorna a lista contendo apenas os carros da marca especificada
}

console.log(filtraPorMarca(carros, "VW")); // Chama a função para filtrar os carros da marca "VW" e imprime o resultado no console.

// Exercício 4 - Procurando um veículo por acessório

function filtraPorAcessorio(carros, acessorios){

    let resultado = []

    for (let i = 0; i < carros.length; i++) {
        for (let j = 0; j < carros[i].acessorios.length; j++) {
            if(carros[i].acessorios[j] === acessorios){
                resultado.push(carros[i]);
            }
        }
    }

    return resultado;
}

console.log(filtraPorAcessorio(carros, "Ar"));

// Exercício 5 - Encontrando veículos completos
function eCarroCompleto(carros) {
    let lista = []; // Cria um array vazio para armazenar os carros completos

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].completo === true) { // Verifica se a propriedade 'completo' do carro é igual a true
            lista.push(carros[i]); // Adiciona o carro completo ao array 'lista'
        }
    }

    return lista; // Retorna o array contendo apenas os carros completos
}

console.log(eCarroCompleto(carros));

//Exercício 6 - Adicionando mais um carro a concessionária.
function adicionarCarro(carros, novoCarro) {
    carros.push(novoCarro);

    return carros;
}

console.log(adicionarCarro({
    modelo: "WRV",
    marca: "Honda",
    ano: "2022",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 89000.00
}));

// Exercício 7 - Removendo um carro da lista de carros da concessionária.
function removeCarro(carros, indice) {
    const listaAtualizada = []; // Cria um array vazio para armazenar a lista atualizada

    for (let i = 0; i < carros.length; i++) {
        if (i !== indice) { // Verifica se o índice atual é diferente do índice a ser removido
            listaAtualizada.push(carros[i]); // Adiciona o carro atual à lista atualizada
        }
    }

    if (listaAtualizada.length === carros.length) {
        return "Indice inválido."; // Retorna uma mensagem de "Índice inválido" se a lista atualizada tiver o mesmo comprimento da lista original
    }

    return listaAtualizada; // Retorna a lista atualizada sem o carro removido
}

console.log(removeCarro(carros, 1));

// Exercício 8 - Procurando todos os carros novos
function contaCarrosNovos(carros) {
    let contador = 0; // Inicializa um contador para contar a quantidade de carros novos.

    // Percorre a lista de carros usando um loop for.
    for (let i = 0; i < carros.length; i++) {
        const ano = carros[i].ano; // Obtém o ano do carro atual.

        // Verifica se o ano do carro é maior ou igual a 2013, o que significa que é um carro novo.
        if (ano >= 2013) {
            contador++; // Incrementa o contador se o carro for novo.
        }
    }

    return contador; // Retorna a quantidade de carros novos encontrados.
}

console.log(contaCarrosNovos(carros));

// Exercício 9 - Quem são os donos?
function atualizaInformacaoCarros(carros, indice, pessoa) {
    // Percorre a lista de carros e redefine a propriedade 'donos' como um objeto vazio para cada carro
    for (let i = 0; i < carros.length; i++) {
        carros[i].donos = {};
    }

    // Define o objeto 'pessoa' como o valor da propriedade 'donos' do carro no índice fornecido
    carros[indice].donos = pessoa;

    return carros; // Retorna a lista de carros atualizada
}

// Exemplo de uso
console.log(atualizaInformacaoCarros(carros, 2, {
    nome:     "João",
    telefone: "91919-9191"
}));