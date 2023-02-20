const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e){
    e.preventDefault();
    setResultado ('ola mundo')
});

function setResultado(){
    const result = document.querySelector('#result');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const pesoN = peso.value;
    const alturaN = altura.value;
    const resultado = pesoN/alturaN ** 2;
    result.innerHTML = '';
    if(resultado < 18.5){
        const p = document.createElement('p');
        p.classList.add('paragrafoResultado'),
        p.innerHTML = `O seu IMC é ${resultado}, você esta a baixo do peso!`;
        result.appendChild(p);
    }else if(resultado > 18.5 && resultado < 24,9){
        const p = document.createElement('p');
        p.classList.add('paragrafoResultado'),
        p.innerHTML = `O seu IMC é ${resultado}, você esta a com o peso normal!`;;
        result.appendChild(p);
    }
    
}

