/*
1 - Faça um algoritimo de dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação
confirme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) /3;

classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado;
*/

const nota01 = 3;
const nota02 = 5;
const nota03 = 7;
const media = (nota01 + nota02 + nota03) / 3;
//console.log(media);


if (media < 5) {
    console.log('Reprovado')
}
else if (media >= 5 && media <= 7) {
    console.log('Recuperação')
}
else {
    console.log('Aprovado')
}
console.log(media);
