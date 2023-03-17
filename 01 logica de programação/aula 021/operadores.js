/*
operadores de computação 
> maior que    / resposta boolean (true or false)
>= maior que ou igual a  / resposta boolean (true or false)
< menor que    / resposta boolean (true or false)
<= menor que ou igual a  / resposta boolean (true or false)
== igualdade  (valor)   / resposta boolean (true or false)
=== igualdade restrita (valor e tipo)   / resposta boolean (true or false)
!= diferentre (valor)  / resposta boolean (true or false)
!== diferente restrito (valor e tipo)  / resposta boolean (true or false)
*/

const num1 =10; // number 
const num2 = '10'; // string
const comp = num1 === num2;
console.log(comp);

/*
Operadores lógicos 
&& -> AND -> E   // o operador && precisa ser verdadeiro e verdadeiro para retornar true caso um deles não seja o operador retornará falso 
|| -> or -> ou   // o operador || precisa ser falso e falso para retornar falso caso um deles não seja o operador retornará verdadeiro 
! -> NOT -> NÂo // negação inverte os valores 
*/

let e = console.log(true && true); // o operador && precisa ser verdadeiro e verdadeiro para retornar true caso um deles não seja o operador retornará falso 
let ou = console.log(false || false); // o operador || precisa ser falso e falso para retornar falso caso um deles não seja o operador retornará verdadeiro 