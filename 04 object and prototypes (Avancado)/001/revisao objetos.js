// objeto liteal

const pessoa = {
    /*corpo do obeto*/
   /* chave do objeto */nome: 'Augusto', /*valor do objeto*/
   /* chave do objeto */sobrenome: 'Tavares Gaspar', /*valor do objeto*/

}; 

// notação de ponto 
console.log(pessoa.nome); 
console.log(pessoa.sobrenome);

// notação de colchetes
const chave = 'nome' // qinado se precisa acessar um objeto dinamicamente usa-se notação de colchetes 
console.log(pessoa [chave]); 
console.log(pessoa ['sobrenome']);

// construturor de array/ object

const p1 = new Object();
p1.nome = 'Marcela';
p1.sobrenome = 'Bitencourt';


console.log(p1.nome); 
console.log(p1.sobrenome);

// deletar 
delete p1.nome;
console.log(p1); 

// metodo em um objeto 

const pessoa1 = {
    nome: 'Mia', 
    sobrenome: 'Hotlife',
    idade: 31,
}; 

pessoa1.falarNome = function(){
    return(`${this.nome} está falando oi!`)
}

pessoa1.GetData = function(){ // quando uma função esta dentro de um objeto ela é chamada de metodo 
    const dataAtual = new Date();
    return (dataAtual.getFullYear()-this.idade)
}

console.log(pessoa1.nome); 
console.log(pessoa1.sobrenome);
console.log(pessoa1.falarNome());
console.log(pessoa1.GetData());


// for in 

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}


// factory functions

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p2 =  criaPessoa('Matheus', 'Elias');
// console.log(p2.nomeCompleto); se usar get no metodo nomeCompleto ao chamar o metodo não usa=se ()
console.log(p2.nomeCompleto());

// constructor function


function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome  = sobrenome;
}
// primeiramente a palavra new cria um objeto vazio {}, depois vai pegar a palavra .this (palavra chave) e atrela o novo objeto a palavra .this
const p3 = new Pessoa2('Marcos', 'Nanine');
Object.freeze(p3); // não deixa alterar o valor do objeto, pode ser usado dentro da função com a palavra .this, funciona com arrays também
p3.nome = 'lurdes';

console.log(p3);
