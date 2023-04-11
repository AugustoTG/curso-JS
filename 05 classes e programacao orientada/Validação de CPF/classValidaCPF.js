
class ValidaFormulario{
  constructor () {
    this.formulario = document.querySelector('.formulario')
    this.evento()
  }

  evento(){
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }
}


const valida = new ValidaFormulario();
