const timer = document.querySelector('#timer');
function criaSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
let segundo = 0;
    const time = setInterval(function(){
    segundo ++;
}, 1000);
let pegarSegundos = criaSegundos(segundo)
function iniciar(){
    timer.innerHTML = pegarSegundos;
}
function parar(){
    timer.innerHTML = 'parou!'
}
function zerar(){
    timer.innerHTML = 'finalizou!'
}
