//  IIFE -> Immediately invoked function expression 

(function(peso, altura){
    const nome = 'Augusto'
    function criaSobrenome(sobrenome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaSobrenome('Tavares'))
    }
    falaNome();
    console.log(peso, altura)
})(85, 1.7);

const nome = 'Luiz'