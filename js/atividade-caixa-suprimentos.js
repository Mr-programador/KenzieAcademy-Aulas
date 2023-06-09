/*
Exercício - Itens para acampar
Você e seus amigos decidiram ir acampar. Antes de mais nada fizeram uma lista, onde cada amigo deve comprar 5 itens para levar para a viagem.

Cada amigo ficou responsável por uma seção de itens. As seções são: Higiene, Alimentação, Farmácia e Lazer. Seus amigos devem trazer exatamente cinco itens de cada seção. Todos os itens serão colocados juntos na caixa de suprimentos.

Cada amigo representa um array e a caixa de suprimentos é a composição destes arrays. Você deve colocar os itens dentro da caixa de forma organizada, separando as seções, afinal de contas, não queremos nossos marshmallows com gosto de desinfetante.

Condições
Os amigos não podem comprar mais ou menos do que cinco itens, ou seja, tem que ser exatamente cinco itens.

Caso alguém compre mais itens ou menos itens, você deverá retornar uma mensagem.

Pensando na solução
Crie uma variável do tipo lista chamada caixaDeSuprimentos.
Crie uma variável para cada seção: higiene, alimentacao, farmacia, lazer. Todas devem ser do tipo lista.
Dentro de cada uma destas variáveis insira itens pertinentes a seção. Exemplo:
alimentacao = ['Pão de forma', 'Pão de Sal', 'Salsicha', 'Água', 'Molho de Tomate']

4. Insira todas seções na variável caixaDeSuprimentos

5. Verifique se a caixa de suprimentos possui o tamanho 4 (4 seções).

Se sim, acesse as seções e verifique se cada uma delas possui tamanho 5 (5 itens cada).
Se sim, retorne: "Podemos ir acampar."
Se o tamanho for maior que 5, retorne: "Tem itens demais, não precisamos de tantos."
Se o tamanho for menor que 5, retorne: "Precisamos de mais itens desta seção."
Se o tamanho da caixaDeSuprimentos for menor que 4, retorne: "Algum amigo ainda não retornou com os itens."
Se o tamanho da caixaDeSuprimentos for maior que 4, retorne: "Acho que temos um intruso.".length
Lembre-se de usar o para verificar o tamanho de suas listas.
*/