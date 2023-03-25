// defineProperty - defineProperties

function Produto(nome, preco, estoque){
   this.name = nome;
   this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('valor invalido')
            }
            estoquePrivado = valor 
        }
    });
}
const p1 = new Produto('kalandiva', 12, 5);
const p2 = new Produto('Cacto', 4, 15);
const p3 = new Produto('rosa de corte', 8, 30);
const p4 = new Produto('ficus', 100, 2);
const p5 = new Produto('begonia', 20, 6);
p5.estoque = 90
delete p4.estoque;

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
p5.estoque = 'a';
console.log(p5.estoque);
