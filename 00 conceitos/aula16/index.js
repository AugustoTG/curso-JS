
const alunos =['maria', 'joão', 'Luiz'];

console.log(alunos[0]); // mostra o que esta na casa
alunos[1] = 'Eduardo'; // adiciona ou subistitui na casa 
alunos[3] = 'Luiza'; // adiciona ou subistitui na casa 
console.log(alunos.length); // mostra a quantidade de array
alunos.push('Larrisa'); // adiciona no fim 
alunos.unshift('Mario'); // adiciona na casa 0
const removido = alunos.pop(); //  retira o ultimo elemento 
const removidoPrimeiro = alunos.shift(); //  retira o primeiro elemento 
delete alunos[2]; // remove o elemento sem tira a possição do array
console.log(alunos.slice(0, -2)) // fatia o objeto 
console.log(alunos);
console.log(removido);
console.log(removidoPrimeiro);