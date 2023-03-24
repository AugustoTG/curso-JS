// reduce indicado para trasformar os elementos de um array em um só



/* Somente os números (reduce)*/
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numbers.reduce(function(acumulador, valor, indice, array){
    return acumulador + valor;
}, 0 /*valor inicial opcional se não mandar o valor será igual ao primeiro elemento do array*/);

console.log(total)

// retorne a pessoa mais velha


const people = [
    {name: 'luiz', idade: 62},
    {name: 'Maria', idade: 23},
    {name: 'Eduardo', idade: 55},
    {name: 'Letícia', idade: 90},
    {name: 'Rosana', idade: 32},
    {name: 'Wallace', idade: 80},
];

const oldPerson = people.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(oldPerson);