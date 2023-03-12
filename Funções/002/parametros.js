//parametro
// arguments - sustenta todos os argumentos enviados 
// arguments não funciona em arrow function
function funcao(a, b, c){
    let total = 0
    for(let argumentos of arguments){
        total += argumentos;
    }
    console.log(arguments[5]);
    console.log(total);
    console.log(a, b, c);
}
// argumento
funcao(1,1,2,3,4,60);

function funcao2(a, b, c, d, e, f){
   
    console.log(a, b, c,  d, e, f);
}

funcao2(1,2,3,4,60);

function soma(a, b){
   
    console.log(a + b, c,  d, e, f);
}

soma(1,2,3,4,60);