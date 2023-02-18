
function dados (){
    const formPessoa = document.querySelector(".formulario");

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
        }
        formPessoa.addEventListener('submit', recebeEventoForm);
}

dados();