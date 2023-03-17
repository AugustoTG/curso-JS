// declaração de função 
// quando declaramos a função desta forma ocore o (function Hoisting)/ posso chamar a função antes de declara-la
falaoi();
function falaoi(){
    console.log('oi');
}

// funções sao First-class objects (objetos de primeira classe)
// functions expression 

const souUmDado = function(){
    console.log('Sou um dado');
};
souUmDado();

// arrow function

const funcaoArraw = () => {
    console.log('Sou uma Arrow function');
};

funcaoArraw();

// dentro de objstos
const obj ={
    // falar: function(){
    falar(){
        console.log('estou falando')
    }
};