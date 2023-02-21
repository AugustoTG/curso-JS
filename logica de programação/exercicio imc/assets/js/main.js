const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if(!peso || !altura){
        setResultado ('Peso ou Alturta invalido!', false);
        p.classList.add('ColorRed');
        return;
    }
    const imc = getImc(peso, altura);
    console.log(imc)
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
    if(imc >= 39.9){

    }else if(imc >= 34.9){

    }else if(imc >= 29.9){
        
    }else if(imc >= 24.9){
        
    }else if(imc >= 18.5){
        
    }
}
function setResultado(msg, isValid){
    p.classList.add('paragrafoResultado');
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = criarP();
    p.innerHTML = msg;
    result.appendChild(p);
    
    /*const resultado = (peso/altura ** 2)*10000;
    if(resultado < 18.5){
        let p = criarP();
        p.innerHTML = `O seu IMC é ${resultado}, você esta a baixo do peso!`;
        result.appendChild(p);
    }else if(resultado > 18.5 && resultado < 24.9){
        let p = criarP();
        p.innerHTML = `O seu IMC é ${resultado}, você esta a com o peso normal!`;
        result.appendChild(p);
    }else if(resultado >= 25 && resultado < 29.9){
        let p = criarP();
        p.innerHTML = `O seu IMC é ${resultado}, você esta a com sobrepeso!`;
    }else if(resultado >= 30 && resultado < 34.9){
        let p = criarP();
        p.innerHTML = `O seu IMC é ${resultado}, você esta a com obesidade grau 1!`;
    }else if (resultado >= 35 && resultado < 39.9){
        let p = criarP();
        p.innerHTML = `O seu IMC é ${resultado}, você esta a com obesidade grau 2!`;
    }else{
        let p = criarP();
        p.innerHTML = `O seu IMC é ${resultado}, você esta a com obesidade grau 3!`;
    }*/
    
}

