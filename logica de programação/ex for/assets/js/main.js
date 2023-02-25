const element = [
    {tag: 'p', texto: 'frase 1'}, // 0
    {tag: 'div', texto: 'frase 2'}, // 1
    {tag: 'footer', texto: 'frase 3'}, // 2
    {tag: 'section', texto: 'frase 4'}, // 3
];

let conteudo = document.querySelector('#conteudo');

conteudo.innerHTML = element;
