const element = [
    {tag: 'p', texto: 'frase 1'}, // 0
    {tag: 'div', texto: 'frase 2'}, // 1
    {tag: 'footer', texto: 'frase 3'}, // 2
    {tag: 'section', texto: 'frase 4'}, // 3
];

const container = document.querySelector('.container');
const paragrafo = document.createElement('div');

for (let i = 0; i < element.length; i++){
    let { tag, texto} = element[i];
    let tagCriada = document.createElement(tag);
    //tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    paragrafo.appendChild(tagCriada);

}

container.appendChild(paragrafo);