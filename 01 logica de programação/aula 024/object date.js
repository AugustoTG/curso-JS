//const tresHoras = 60*60*3*1000;// ( a data é formada por milesimo de segundos por isso a conta)
//const umDia = 60*60*24*1000;
//const data = new Date(0 + tresHoras + umDia);// new Date(0) -> 01/01/1970 timestamp unix ou época unix 
//console.log(data.toString());
const data = new Date() // criara uma data e hora no exato momento de hoje
console.log(data.toString());
//                  ano mes dia  hora min seg ms        
const data2 = new Date(2019, 3, 20, 15, 14, 27, 999) // criara uma data e hora no exato momento de hoje
// mes começa em 0 e termina em 11 
console.log(data2.toString());

const data3 = new Date('2023-02-22 16:02:00');
console.log(data3.toString());

console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth());// Mês começa do zero
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Minuto', data3.getMinutes());
console.log('Ms', data3.getMilliseconds());
console.log('Dia da semana', data3.getDay()); //0 - é domingo

// função de formatação de hora e data 
function nummeroaEsquerda(num){
 return num >= 10 ? num : `0${num}`
}

function formataData (data4){
    const dia = nummeroaEsquerda(data3.getDate());
    const mes = nummeroaEsquerda(data3.getMonth()+1);
    const ano = nummeroaEsquerda(data3.getFullYear());
    const hora = nummeroaEsquerda(data3.getHours());
    const minuto = nummeroaEsquerda(data3.getMinutes());
    const seg = nummeroaEsquerda(data3.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${seg}`
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);