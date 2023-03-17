//operador ternario
//(condição) a condição pode ou não estar entre parentes dependendo do tamanho ? 'valor para verdadeiro': 'valor para falso'

/*const pontuacaoUsuario = 999;
if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP!')
}else{
    console.log('Usuário normal!')
}*/

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
const corUsuario = null
const corPadrao = corUsuario || 'black'
console.log(nivelUsuario, corPadrao)