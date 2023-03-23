
const names = ['Augusto', 'marcos ', 'Midiã', 'lurdinha', 'Marcia', 'Luiza'];

// nome.splice(índice, delete, elemento1, elem 2, ...);

console.log(names)
//const removidos = names.splice(-2, 1);
// const removidos = names.splice(3, 0,  'Marlelo' );
const removidos = names.splice(1, 1,  'Marlelo' );
console.log(names, removidos)