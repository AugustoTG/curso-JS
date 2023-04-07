function CriaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
       
    });
}
const falar = {
    fala(){
        console.log(`${this.nome} esta falando `)
    }
};

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`)
    }
};

const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo `)
    }
};
const pessoaPrototype = {...falar, ...comer, ...beber}

const pessoa1 = CriaPessoa('Augusto', 'Tavares')
console.log(pessoa1)

const pessoa2 = CriaPessoa('Marina', 'Tavares')
console.log(pessoa1)


console.log(pessoa2.falar)