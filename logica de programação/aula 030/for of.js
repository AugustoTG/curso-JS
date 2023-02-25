//            0123456
//const nome = 'Augusto';
/*
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

for ( let indice in nome){
    console.log(nome[indice]);
}

for( let valor of nome){
    console.log(valor);
}*/

// for - geralment com  interáveis (array ou string)
// for in - retorna indice ou chave (string, array ou objetos)
// for of - retorna o valor em si  (string, array ou objetos)
const nome = ['Augusto', 'Tavares', 'Gaspar'];
for( let valor of nome){
    console.log(valor);
}