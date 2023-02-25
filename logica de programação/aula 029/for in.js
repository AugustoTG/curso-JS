  const frutas = ['pêra', 'maçã', 'banana'];
 // for classico
 // for(let i = 0; i < frutas.length; i++){
 //   console.log(frutas[i])
 // }
// for in lê os indices no caso de vetores e chaves do objeto

for(let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Augusto',
    sobrenome: 'Tavares Gaspar',
    idade: 30
};
console.log(pessoa.nome);
console.log(pessoa['nome']);
for ( let chave in pessoa){
    console.log(chave, pessoa[chave]);
}
