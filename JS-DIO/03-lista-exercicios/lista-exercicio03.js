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

const precoEtiqueta = 100;
const formadePagamento = 1;

if (formadePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formadePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 1.5));
} else if (formadePagamento === 3) {
    console.log(formadePagamento);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
