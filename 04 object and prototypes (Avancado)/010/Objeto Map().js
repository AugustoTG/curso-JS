const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Augusto'},
    { id: 1, nome: 'Helena'},
];

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set (id, {...pessoa});
}

console.log(novasPessoas)

console.log(novasPessoas.get(2))