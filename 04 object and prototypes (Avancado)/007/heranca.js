// produto -> almento de preço e desconto 
// flores = cor, vasos = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.acrecimo = function(quantia){
    this.preco += quantia
};

Produto.prototype.desconto = function (quantia){
    this.preco -=   quantia
};

function Flor(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Flor.prototype = Object.create(Produto.prototype);
Flor.prototype.constructor = Flor;

const flor = new Flor('rosa', 8, 'vermelha');

function Vaso(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque =estoque;
}
Vaso.prototype = Object.create(Produto.prototype);
Vaso.prototype.constructor = Vaso;

const vaso = new Vaso('pote 11', 2, 'plastico', 5);
vaso.desconto(1);
flor.acrecimo(1);
console.log(flor);
console.log(vaso);

