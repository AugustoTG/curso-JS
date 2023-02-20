const hora = 24;
// (if) se a condição for verdadeira fale bom dia (else) se não fale boa tarde 
// if pode ser usado sozinho 
// else e else if não podem ser udados sem if 
// else é usado uma vez
// else if pode ser udado mais de uma vez
if (hora >=6 &&hora < 12){
    console.log('Bom dia!');
}else if(hora >= 13 && hora <= 17){
    console.log('Boa tarde!');
}else if(hora > 17 && hora <= 24){
    console.log('Boa noite!');
}else if(hora >=0 && hora < 6){
    console.log('Boa Madrugada!');
}
// o if, else if, else irá executar até encontrar um valor verdadeiro assim sendo não executará o restante do programa dentro do bloco 