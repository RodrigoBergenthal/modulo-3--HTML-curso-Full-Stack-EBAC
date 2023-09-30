/*
1 - O IMC - Indice de Massa Corporal é um criterio da Organização Mundial de Saúde para dar uma indicação sobre a condição de Peso de uma pessoa Adulta

Formula do IMC:
IMC = Peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- entre 25 e 30 acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

const peso = 80;
const altura = 1.77;
const imc = peso / Math.pow(altura, 2);
console.log(imc)
if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal')
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do Peso')
} else if (imc >= 30 && imc < 40) {
    console.log('obeso')
}else {
    console.log('Obesidade Grave')
}