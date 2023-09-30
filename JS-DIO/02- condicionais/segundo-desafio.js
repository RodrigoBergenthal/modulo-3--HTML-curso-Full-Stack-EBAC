/*
1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo de copmbustivel que está no seu carro;
4 - Gasto médio de combustivel do carro por KM;
5 - Distancia em KM da viagem;
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmLitros = 10;
const distanciaKM = 600;
const tipoDeCombustivel = 'Etanol';

const litrosConsumidos = distanciaKM / kmLitros;

if (tipoDeCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} 
else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
