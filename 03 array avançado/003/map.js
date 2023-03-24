 // map - > usa o valor do array original e retorna outro array alterado ou nao - map sempre terá  o tamanho do array original 

// retorne os números maiores que 10
//               0   1   2  3  4  5  6  7  8   9  10  11  12   indices
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const doubleNumber = numbers.map((valor) =>  valor * 2 );// retorna  o valor antigo com um valor diferente 
console.log(doubleNumber);

// para cada elemento:
// retorne apenas uma string com o nome da pessoa
// remova apenas a chave 'nome' do objeto
// adicione uma chave id em cada objeto

 const people = [
    {name: 'luiz', idade: 62},
    {name: 'Maria', idade: 23},
    {name: 'Eduardo', idade: 55},
    {name: 'Letícia', idade: 19},
    {name: 'Rosana', idade: 32},
    {name: 'Wallace', idade: 47},
 ];

const namePeople = people.map((obj) => obj.name)
console.log(namePeople);

const agePeople = people.map((obj) => {
    return {idade: obj.idade}; });

console.log(agePeople);

const withId = people.map((obj, indice) => { // quando usa-se o o map vc altera o array original, caso não queira esse comportamento use o {...} spread operator
    const newObj = {...obj}
    newObj.id = (indice + 1)* 1000
    return newObj;
});
console.log(people);
console.log(withId); 
