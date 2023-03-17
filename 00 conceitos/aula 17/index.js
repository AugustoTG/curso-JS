function saudacao(nome){
    return `Bom dia! ${nome}`;
}

const variavel = saudacao('Luiz');
console.log(variavel)

function soma(x=1, y=1) {//Ao atribuir x =1, y=1 caso eu não atribuir valores a função soma(x, y) tera o valor de (1, 1)
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 2));
console.log(soma(2, 10));
console.log(soma('luiz', ' Otávio')); // concatenação

// função anonima 

const raiz = function (n){
    return n ** 0.5;
}
 console.log(raiz(9));

 // arrow function 

//const raizQuadrada = (a) => {
//    return a** 0.5;
//}
const raizQuadrada = (a) => a** 0.5;

 console.log(raizQuadrada(9));
 console.log(raizQuadrada(16));

 //objeto literal

 const pessoal1 = {
    nome: ' Augusto',
    sobrenome:'Tavares',
    idade: 30
};
console.log(pessoal1.nome)

// fabrica de objetos 
function pessoa(nome, sobrenome, idade){
    return{
       // nome: nome,
       // sobrenome: sobrenome,
       // idade: idade,
       nome, sobrenome, idade
    };
}
const pessoa2 = pessoa('Midiã', 'Gaspar', 30)
console.log(pessoa2.nome)
const pessoa3 = pessoa('Diovana', 'Reis', 19)
console.log(pessoa3.nome)

const pessoa5 = {
    nome: ' Augusto',
    sobrenome:'Tavares',
    idade: 30,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`)
    }
};
 pessoa5.fala();