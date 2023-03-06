const timer = document.querySelector('#timer');
let data;
function criaSegundos(segundos){
    data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
let segundos = 0;
let time;
function iniciaTimer(){
    time = setInterval(function(){
        segundos ++;
        timer.innerHTML = criaSegundos(segundos);
    }, 1000);
}
function iniciar(){
    timer.classList.remove('colorRed')
    clearInterval(time);
    iniciaTimer();
}
function parar(){
    clearInterval(time);
    timer.classList.add('colorRed')
}
function zerar(){
    timer.classList.remove('colorRed')
    clearInterval(time);
    timer.innerHTML = '00:00:00'
    segundos = 0;
}
