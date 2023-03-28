// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // ___proto___: Object.prototype
};

// new Object -> Object.prototype
const objB = {
    chaveB: 'B'
    // ___proto___: ObjA
};


const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA)
console.log(objC.chaveB)


function Produto(nome, preco){
this.nome = nome;
this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco- (this.preco * (percentual/100))
}

Produto.prototype.acrescimo = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

const p1 = new Produto('cacto', 4);
//p1.desconto(100);
p1.acrescimo(100)
console.log(p1)

const p2 = {
    nome: 'caneca',
    preco: 5
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(10);
console.log(p2)


const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 52
    }
});
p3.nome = 'urso'
p3.acrescimo(5)
console.log(p3)