const novaTarefa = document.querySelector('.inputNovaTarefa');
const btn = document.querySelector('.btnNovaTarefa');
const lista = document.querySelector('.tarefas');
function criali(){
    const li = document.createElement('li');
    return li
}
novaTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
    if(!novaTarefa.value) return; 
    criaTarefa(novaTarefa.value);
    }
})
function lipaTarefa(){
    novaTarefa.value = ''
    novaTarefa.focus();
}
function criaBntApagar(li){
    li.innerText += ' ';
    const bntApagar = document.createElement('button');
    bntApagar.innerText = 'Apagar';
    bntApagar.setAttribute('class', 'apagar');
    bntApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(bntApagar);
}
function criaTarefa(text){
    const li = criali()
    li.innerText = text;
    lista.appendChild(li);
    lipaTarefa()
    criaBntApagar(li)
    salvaTarefa();
}

btn.addEventListener('click', function(){
    if(!novaTarefa.value) return; 
    criaTarefa(novaTarefa.value);
})

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvaTarefa()
    }

})
function salvaTarefa(){
    const liTarefa = lista.querySelectorAll('li');
    const listaTarefa = [];
    for(let tarefa of liTarefa){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefa.push(tarefaTexto);
    }
    const tarefaJSON = JSON.stringify(listaTarefa);
    localStorage.setItem('tarefas', tarefaJSON);
}

function adicionaTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefas();