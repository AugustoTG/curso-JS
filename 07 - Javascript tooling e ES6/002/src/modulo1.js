const nome = 'Augusto';
const sobrenome = 'Tavares'
const idade = 30

function soma(x, y){
    return x + y;
}

//podemos exportar constantes com outro nome basta colocar  'as' ex: x as y
export {nome, sobrenome, idade, soma}