
// indice        0       1     2     3    4 ...
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//const primeiroNumero = numeros[0];
//console.log(primeiroNumero);
//  a Atribuição via desestruturação é uma sintaxe que serve para retirar valores de uma array de modo mais facil. Se usar const todas as atribuições seram de const se usar let todos seram de let
//pegando elemento[0]    [1]            resto do array
const [primeiroNumero, segundoNumero, , quartoNumero, , , setimoNumero,  ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, quartoNumero, setimoNumero);
//operador rest  tem nome de rest quanto usa-se para pegar o resto e quando usado para distribuir chamamos de spread
console.log(resto);
//indice              0          1            2
//indice          0  1   2    0  1   2    0  1  2
const number = [ [1, 2 , 3], [4, 5 , 6], [7, 8 , 9] ];
console.log (number[1][2]);
const [,[,,seis]] = number;
console.log (seis);
const [list1, list2, list3] = number;
console.log(list2[2]); 