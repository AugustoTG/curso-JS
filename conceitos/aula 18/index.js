
function dados (){
    const formPessoa = document.querySelector(".formulario");
    const pessoa = [];

        //formPessoa.onsubmit = function (evento) {
        //evento.preventDefault();
        //alert(1);
        //console.log('Foi enviado!');
        //}

        function recebeEventoForm (evento) {
            evento.preventDefault();
            const nome = formPessoa.querySelector('#nome');
            const sobrenome = formPessoa.querySelector('#sobrenome');
            const peso= formPessoa.querySelector('#peso');
            const altura = formPessoa.querySelector('#altura');
            const resposta = document.querySelector('.resultado');
            pessoa[0] = nome.value;
            pessoa[1] = sobrenome.value;
            pessoa[2] = peso.value;
            pessoa[3] = altura.value;
            console.log(pessoa)
            resposta.innerHTML += `<p>Seu nome é:${pessoa[0]} ${pessoa[1]}, seu pesso: ${pessoa[2]}, sua alura:${pessoa[3]}</p>`;
        }
       
        formPessoa.addEventListener('submit', recebeEventoForm);
}
dados();