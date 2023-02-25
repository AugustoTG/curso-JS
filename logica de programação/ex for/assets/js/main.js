const element = [
    {tag: 'p', texto: 'frase 1'}, // 0
    {tag: 'div', texto: 'frase 2'}, // 1
    {tag: 'footer', texto: 'frase 3'}, // 2
    {tag: 'section', texto: 'frase 4'}, // 3
];

const container = document.querySelector('.container');
const paragrafo = document.createElement('div');

for (let i = 0; i < element.length; i++){
    console.log(element[i])
}

container.innerHTML = element;
