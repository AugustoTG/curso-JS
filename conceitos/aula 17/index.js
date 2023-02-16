function saudacao(nome){
    return `Bom dia! ${nome}`;
}

const variavel = saudacao('Luiz');
console.log(variavel)

function soma(x=1, y=1) {//Ao atribuir x =1, y=1 caso eu não atribuir valores a função soma(x, y) tera o valor de (1, 1)
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 2));
console.log(soma(2, 10));
console.log(soma('luiz', ' Otávio')); // concatenação

// função anonima 

const raiz = function (n){
    return n ** 0.5;
}
 console.log(raiz(9));

 // arrow function 

//const raizQuadrada = (a) => {
//    return a** 0.5;
//}
const raizQuadrada = (a) => a** 0.5;

 console.log(raizQuadrada(9));
 console.log(raizQuadrada(16));
