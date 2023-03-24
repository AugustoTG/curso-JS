// for each serve para interar sobre arrays 

const a1 = [10,2,47,40,48,6,7,74,9];

// for of 
// for(let valor of a1){
//     console.log(valor)
//}
let total = 0
a1.forEach((valor, indice, array) =>{
    //console.log(valor, indice, array)
    return total += valor; // simulação de reduce
});

console.log(total);