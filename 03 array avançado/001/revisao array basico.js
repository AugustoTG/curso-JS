const names = ['Augusto', 'marcos ', 'Midiã', 'lurdinha'];

names[2] = 'Marcilene'

//delete names[2];

console.log(names);

console.log(nomes.length);// .length é um atributo entao não se usa parentes, só se usa parentes em metodos 

//const removidos = nomes.pop();
//const removido = nomes.shift();

//console.log(names, removidos, removido);

console.log(names)

nomes.push('João');
nomes.unshift('João');


const novo = nomes.slice(1, 3); // divide o array pegando os indices 1 e 2 no caso 


// const nome2 = "Augusto Tavares Gaspar";
// const nomes2 = nome2.split ('') // trasforma a string em um array

const nome2 = ["Augusto Tavares Gaspar"];
const nomes2 = nome2.join (' ')

