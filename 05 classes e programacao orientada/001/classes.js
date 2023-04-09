class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar (){
        console.log(`${this.nome} esta falando!`)
    }
    comer (){
        console.log(`${this.nome} esta comendo!`)
    }
    beber (){
        console.log(`${this.nome} esta bebendo!`)
    }
}

const p1 = new Pessoa("Augusto", "Tavares");
console.log(p1)