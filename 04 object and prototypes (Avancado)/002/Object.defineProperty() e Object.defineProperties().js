// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: false, 
            configurable: false, 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: false, 
            configurable: false, 
        },
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode ser alterado o valor ou nao true or false
        configurable: false, // pode apagar a chave ou reconfigurar a chave sim ou não  / true or falso
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
console.log(p5);

console.log(Object.keys(p5));