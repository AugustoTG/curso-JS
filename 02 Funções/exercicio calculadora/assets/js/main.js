function criaCalculadora(){
return {
    display: document.querySelector('.display'),



    inicia() {
        this.cliqueBotos();
    },

    cliqueBotos(){
        document.addEventListener('click', function(e){
           const el = e.target;
            
           if(el.classList.contains('btn btn-num')){
            this.btnParaDisplay(el.innerText);
           }
        }.bind(this))
    },

    btnParaDisplay(valor){
        this.display.value += valor;
    },
}
}
const calculadora = criaCalculadora();
calculadora.inicia()