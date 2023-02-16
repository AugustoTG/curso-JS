const num1 = Number(prompt('Digite um número:'));
const title  = document.getElementById('title');
const text = document.getElementById('text');
title.innerText = num1;

text.innerHTML = `<p>A raiz do número é: ${num1 ** 0.5}</p><br>`;
text.innerHTML += `${num1} é um número inteiro: ${Number.isInteger(num1)}</p><br>`;
text.innerHTML += `é um NaN: ${isNaN(num1)}</p><br>`;
text.innerHTML += `Arredondado para baixo: ${Math.floor(num1)}</p><br>`;
text.innerHTML += `Arredondado para cima: ${Math.ceil(num1)}</p><br>`;
text.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)}</p>`;
