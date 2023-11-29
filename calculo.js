// 1 - Cálculo da Área do tecido comprado:

let largura = prompt ('Qual é a largura do tecido (em metros)?');

let altura = prompt ('Qual é a altura do tecido (em metros)?');

alert ('Altura: ' + altura + ' metro(s)' + ' Largura: ' + largura + ' metro(s)' );    

let areaDoTecidoComprado = largura  * altura;

alert ('Área do tecido compradoo = ' + areaDoTecidoComprado + ' metros(s)');

// 2 - Cálculo do custo do m² do tecido

let precoTotalDoTecido = prompt ('Qual foi o preço total que você pagou pelo tecido (em reais)?');

alert ('Você pagou ' +  precoTotalDoTecido / areaDoTecidoComprado + ' reais o m² do tecido');

let custoPorM2 = precoTotalDoTecido / areaDoTecidoComprado;

// 3 - Cálculo da Área do tecido usado na peça

let larguraDoTecidoUsadoNaPeca = prompt ('Qual é a largura do tecido usado para fabricar a peça ?');

let alturaDoTecidoUsadoNaPeca = prompt ('Qual é a altura do tecido usado na peça ?');

let areaDoTecidoUsadoNaPeca = alturaDoTecidoUsadoNaPeca * larguraDoTecidoUsadoNaPeca;

alert ('A área do tecido usado na peça foi de: ' + areaDoTecidoUsadoNaPeca + ' metros(s)');

// 4 - Cálculo do custo do tecido usado na peça

let custoDoTecidoUsadoNaPeca = custoPorM2 * areaDoTecidoUsadoNaPeca;

alert ('O custo do tecido usado na peça foi de ' + custoDoTecidoUsadoNaPeca + ' reais');