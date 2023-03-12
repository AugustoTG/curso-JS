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

function soma(a = 0, b = 0, c = 1){
    
    console.log(a + b + c);
}

soma(1);

function obj({nome, sobrenome, idade}){
    
    console.log(nome, sobrenome, idade);
}

obj({nome: 'Augusto', sobrenome:'Tavares', idade:30});

function arr([valor1, valor2, valor3]){
    
    console.log(valor1, valor2, valor3);
}

arr(['Augusto', 'Tavares', 30]);

function conta(operador, acumulador, ...numeros){
    
    for(let numero of numeros){
        if ( operador === '+') acumulador += numero;
        if ( operador === '-') acumulador -= numero;
        if ( operador === '*') acumulador *= numero;
        if ( operador === '/') acumulador /= numero;
    };
    console.log(acumulador)
}

conta('-',1,20,30,40,50);