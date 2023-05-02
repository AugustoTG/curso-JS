//podemos importar constantes com outro nome basta colocar  'as' ex: x as y

import multiplica, { nome as nome2, sobrenome, idade, soma, Pessoa} from './modulo1';

const nome = 'joão'
console.log(nome2, sobrenome, idade)

console.log(soma(5, 2))

console.log(nome)


const p1 = new Pessoa('Midiã', 'Gaspar');

console.log(p1)

// import modelo 2 - importa todos os itens 
// import * as MeuModulo from './modulo1';

console.log(multiplica(5,5))

