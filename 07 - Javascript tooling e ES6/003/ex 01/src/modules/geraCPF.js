import ValidaCPF from './ValidaCPF';


export default class geraCPF {
    rand(min = 100000000, max = 999999999){
        return (Math.floor(Math.random() * (max - min) + min));
    }
    geraNovoCPF(){
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpf)
    }
}
