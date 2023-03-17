// this. referese ao objeto que esta chamando 
// factory function (função fábrica)
// constructor function (funcção construtora)
function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        // getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        //Getter get trasforma uma funcaço para um metodo da clase // usado para quando vc quer somente obter o valor 
        get imc(){ // pode-se ocultar o ": function"
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Augusto', 'Tavares', 1.7, 85);
console.log(p1.fala('fala sobre JS'));
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Marina Tavares Gaspar';
console.log(p1.altura);
console.log(p1.peso);
console.log(p1.imc); // quando usamos o metodo getter não podemos declarar a função pois a funcção está sendo tratada como uma string no momento
console.log(p1.nome); // foi alterado o nome e sobrenome atraves do metodo setter
console.log(p1.sobrenome);
