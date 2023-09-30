/*
function escrevaMeuNome(nome) {
    console.log('Meu nome é ' + nome);
}
escrevaMeuNome('Rodrigo');

function verificarIdade(idade) {
    if (idade >= 18){
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
    }
}
verificarIdade(18)   
*/

/*
3 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
- Utilize os codigos da tabela a seguir apra ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Codigo Condição de Pagamento:
 1- À vista Débito, recebe 10% de desconto;
 2- À vista no Dinheiro ou Pix, recebe 15% de desconto;
 3- Em duas vezes, preço normal de etiqueta mais juros de 10%;
 4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}


const precoEtiqueta = 100;
const formadePagamento = 4;

if (formadePagamento === 1) {
    console.log(aplicarDesconto (precoEtiqueta, 10));
} else if (formadePagamento === 2) {
    console.log(aplicarDesconto (precoEtiqueta, 15));
} else if (formadePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros (precoEtiqueta,10));
}

