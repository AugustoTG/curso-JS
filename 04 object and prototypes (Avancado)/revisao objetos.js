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

pessoa1.GetData = function(){
    const dataAtual = new Date();
    return (dataAtual.getFullYear()-this.idade)
}

console.log(pessoa1.nome); 
console.log(pessoa1.sobrenome);
console.log(pessoa1.falarNome());
console.log(pessoa1.GetData());


// for in 

for ()
