
alert('AHH')
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
  handleSubmit(e){
    e.preventDefault();
    console.log('ahh')
  }
}


const valida = new ValidaFormulario();
