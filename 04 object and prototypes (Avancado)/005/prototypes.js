
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = ()=> { this.nome + " " + this.sobrenome;}
}
// toda vez que eu tiver um metodo em uma função construtora deve-se colocar dentro da prototype

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + " " + this.sobrenome;
}


const pessoa1 = new Pessoa('Augusto', "T."); // Pessoa = função construtuora 

const data = new Date(); // Data = Função construtora

console.dir(pessoa1);
console.dir(data);