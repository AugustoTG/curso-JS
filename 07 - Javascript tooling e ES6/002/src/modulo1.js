// const nome = 'Augusto';
// const sobrenome = 'Tavares'
// const idade = 30

// function soma(x, y){
//     return x + y;
// }

// //podemos exportar constantes com outro nome basta colocar  'as' ex: x as y

// // export ex 1
// export {nome, sobrenome, idade, soma}


// ex 2 - pode-se exportar diretamente os elementos
export const nome = 'Augusto';
export const sobrenome = 'Tavares'
export const idade = 30

export function soma(x, y){
    return x + y;
}

export class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }    
}
// export default exporta um elemento como padrão, não sendo necessario abrir chaves e pode-se colocar qualquer nome 
export default (f, a) => f*a;