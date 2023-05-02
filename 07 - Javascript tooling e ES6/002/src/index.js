//podemos importar constantes com outro nome basta colocar  'as' ex: x as y

import { nome as nome2, sobrenome, idade, soma} from './modulo1';

const nome = 'joão'
console.log(nome2, sobrenome, idade)

console.log(soma(5, 2))

console.log(nome)