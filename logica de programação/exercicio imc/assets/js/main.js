const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if(!peso || !altura){
        setResultado ('Peso ou Alturta invalido!', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});
function criarP (){
    const p = document.createElement('p');
    return p;
}
function getImc(peso, altura){
    const imc = peso / altura **2;
    return imc.toFixed(2);
}
function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel [3];
    if(imc >= 24.9) return nivel [2];
    if(imc >= 18.5) return nivel [1];
    if(imc < 18.5) return nivel [0];
    
}
function setResultado(msg, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = criarP();
    if (isValid){
        p.classList.add('paragrafoResultado');
    }else{
        p.classList.add('colorRed')
    }
    p.innerHTML = msg;
    result.appendChild(p);
    
}

