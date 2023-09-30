class carros {
    marca;
    cor;
    gastoKM;
    constructor(marca,cor,gastoKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoKM = gastoKM;
    }
        
}

const corsa = new carros('Corsa', 'preto', 1/15);
const palio = new carros('palio', 'branco', 1/20);

console.log(corsa);