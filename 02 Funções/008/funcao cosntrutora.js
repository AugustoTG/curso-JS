//função fabrica -> objetos 
// construtora -> Pessoa( new )
// new cria um objeto e aponta para p1 / p2
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metondo = () => {
        console.log(this.nome + ' :som um método')
    }
}

const p1 = new Pessoa('Augusto', 'Tavares');
const p2 = new Pessoa('Midiã', 'Gaspar');

console.log(p1.nome, p1.sobrenome);
console.log(p1.nome, p1.sobrenome);
p2.metondo()