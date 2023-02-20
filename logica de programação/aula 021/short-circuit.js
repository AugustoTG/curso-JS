/*
&& -> todas as expreçoes tem que ser true para que retorne verdadeiro 
|| -> todas as expreçoes tem que ser false para que retorne false 
*/
console.log('Augusto' && 0 && 'Tavares'); // se eu estou usando uma expreção && e o JS encontrar uma expreção falsa ele retornará o valor falso "O valor mesmo ex: 0"
console.log('Augusto' && true && 'Tavares'); // se eu estou usando uma expreção && e o JS encontrar todas as expreções verdadeiras ele retornará o ultimo valor 'ex: Tavares'

/*Em JavaScript tudo pode ser avaliado em verdadeiro ou falso
valores que avaliados em false 
*false (literal)
(não literal) FALSY
0
' ' " " ` ` string vazia
null
undefined
NaN
*/
// qualquer coisa diferente disso é avaliado como true em JS
console.log('Augusto' && 'Tavares')

function falaOi (){
    return 'Oi';
}
const vaiExecutar = "João"
//('joão')->string verdadeiro  e  verdadeiro ( retorna o ultimo valor )
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || "Augusto" || true); // O JS retornará o Primeiro valor verdadeiro que encontrar e não executará o restante
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'petro';
console.log(corPadrao);

