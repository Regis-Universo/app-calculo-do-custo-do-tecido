// 1 - Cálculo da Área do tecido comprado:

let largura = prompt ('Qual é a largura do tecido: ?');

let altura = prompt ('Qual é a altura do tecido: ?');

alert ('Altura: ' + altura + ' , Largura: ' + largura);    

let areaDoTecidoComprado = largura  * altura;

alert ('Área do tecido compradoo = ' + areaDoTecidoComprado + ' metros');

// 2 - Cálculo do custo do m² do tecido

let precoTotalDoTecido = prompt ('Qual foi o preço total que você pagou pelo tecido?');

let custoPorM2 = precoTotalDoTecido / areaDoTecidoComprado;

alert ('Você pagou ' +  precoTotalDoTecido / areaDoTecidoComprado + ' reais o m² do tecido');

// 3 - Cálculo da Área do tecido usado na peça

let larguraDoTecidoUsadoNaPeca = prompt ('Qual é a largura do tecido usado para fabricar a peça ?');

let alturaDoTecidoUsadoNaPeca = prompt ('Qual é a altura do tecido usado na peça ?');

let areaDoTecidoUsadoNaPeca = alturaDoTecidoUsadoNaPeca * larguraDoTecidoUsadoNaPeca;

alert ('A área do tecido usado na peça foi de: ' + areaDoTecidoUsadoNaPeca);

// 4 - Cálculo do custo do tecido usado na peça

let custoDoTecidoUsadoNaPeca = custoPorM2 * areaDoTecidoUsadoNaPeca;

alert ('O custo do tecido usado na peça foi de ' + custoDoTecidoUsadoNaPeca + ' reais');