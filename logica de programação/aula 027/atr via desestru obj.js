const pessoa = {
    nome:'Augusto',
    Sobrenome:'Tavares Gaspar',
    idade: 30,
    endereco:{
        //rua: 'Vila Iolanda Console',
        numero: '11',
        bairro: 'Boa Vista',
        cidade: 'Itajuba'
    }
};
//console.log(pessoa.nome);
//const nome = pessoa.nome;
//console.log(nome);

// Atribuição via desestruturação
//extrae o valor de nome e ja cria uva constante com esse valor 
//const { nome } = pessoa;
//console.log(nome);
const { nome, Sobrenome, idade: n = ''} = pessoa;
console.log(nome, Sobrenome, n);
const { 
    endereco: { rua: r = 'Padre Nicollau', bairro},
    endereco
 } = pessoa;
console.log(r, bairro, endereco);

const { idade , ...resto} = pessoa

console.log(resto);
