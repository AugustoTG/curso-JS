// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

console.log(num1.toString() + num2); // o num1 continua sendo um numero mesmo o resultado ser de uma string concatenada com um numero
console.log(typeof num1);

/* num1 = num1.toString() // neste casso o num1 vira uma string definitivo  */

console.log(num1.toString(2)); //para representação binaria 

console.log(num1.toFixed(2)); // para arredondar toFixed(numero de casas)

console.log(Number.isInteger(num2)); // para checar se é um numero inteiro 

let temp  = num1 * '5';
console.log(Number.isNaN(temp)); // retorna verdadeiro (NaN) ou falso (numero)

console.log(num1 + num2); // resultado 0.79999999999999

num1 += num2; // 0.8 
num1 += num2; // 0.9
num1 += num2; // 1.0 deveria ser

console.log(num1); // resultado 0.9999999999999999
//num1 = parseFloat(num1.toFixed(2));
num1 = Number(num1.toFixed(2)); // funciona igual ao parseFloat / melhor metodo 
console.log(num1); // resultado 1.00 real 