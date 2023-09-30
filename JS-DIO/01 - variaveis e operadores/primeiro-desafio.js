/* 
você terá 3 variaveis. Sendo elas:
- 1 - Preço do combustivel;
- 2 - Valor médio de gasto do carro;
- 3 - Distancia em KM;
*/

const precoCombustivel = 5.79;
const kmLitro = 12;
const distanciaKM = 1580;

const litrosConsumidos = distanciaKM / kmLitro;
const gastoDaViagem = litrosConsumidos * precoCombustivel;

console.log(gastoDaViagem.toFixed(2));