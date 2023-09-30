class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const rodrigo = new Pessoa('Rodrigo', 37);

const guilherme = new Pessoa();


console.log(rodrigo)