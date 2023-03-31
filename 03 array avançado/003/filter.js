// Filter - > sempre retorna um array com a mesma quantidade de elementos ou menos 

// retorne os números maiores que 10
//               0   1   2  3  4  5  6  7  8   9  10  11  12   indices
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// metodo longo 
// //  recebe esses parametros altomatico não há nececidade de colocarlos 
// function callBackFileter(valor, indice, array){
//     if(valor > 10){
//         return true; // o .filter deve sempre receber um boolean
//     }else {
//         return false; // o .filter deve sempre receber um boolean
//     }
// }
// const filterNumbers = numbers.filter(callBackFileter); //  QUANDO SE USA NOTAÇÃO DE PONTE EM UM ARRAY ELE É UM METODO 

// usual
// const filterNumbers = numbers.filter(valor =>{
//     return valor > 10;
// });

// mais usual
const filterNumbers = numbers.filter((valor) => valor > 10); // como so esta retornando o menteo valor não há necessidade das chaves e nem do return pos esta implicito
console.log(filterNumbers)


 //Rerone as pessoas que tem o nome com 5 letras ou mais
 // Retone  as  pessoas com mais de 50 anos 
 // Retone as pessoas cujo nome termina com A
 
 const people = [
    {name: 'luiz', idade: 62},
    {name: 'Maria', idade: 23},
    {name: 'Eduardo', idade: 55},
    {name: 'Letícia', idade: 19},
    {name: 'Rosana', idade: 32},
    {name: 'Wallace', idade: 47},
 ];

 const namePeople = people.filter((obj) =>{
    console.log(obj.name);
    return obj.name.length >= 5;
 });

const agePeople = people.filter(obj  => obj.idade >= 50);

const finalLetterA = people.filter((obj) => {
    return obj.name.toLowerCase().endsWith('a')
})

 console.log(namePeople);
 console.log(agePeople);
 console.log(finalLetterA);