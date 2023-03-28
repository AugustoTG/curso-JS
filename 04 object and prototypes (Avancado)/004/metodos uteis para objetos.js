/*Object.values
Object.entries
Object.assing(des, any)
Object.getOwnPropertyDescripitor(o, 'prop')
... (spred)

// ja vimos 
Object.keys ( retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propiedades)
Object.defineProperty (define uma propiedade)
 */


const produto = { 
    nome: 'caneca', preço:1.8
};

// metodo mais indicado para pegar elementos de objetos 
const outraCoisa = { ...produto,
    marerial: 'porcelana' 
};

// metodo pouco usado 
const caneca = Object.assign({}, produto, { material: 'porcelana'})

// utilizado para pegar somente poucos elementos do objeto 
const canecas = {nome: produto.nome}

outraCoisa.nome = 'outra coisa'
console.log(produto, outraCoisa, caneca,)
console.log( caneca, canecas)
console.log( Object.keys(produto))

