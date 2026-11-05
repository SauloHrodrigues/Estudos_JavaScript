

import BtDeletar  from "./componets/deletarTarefa.js";
import BtConcluir from "./componets/concluirTarefa.js";


const novaTarefa = document.querySelector('[data-form-button]');
const btNovoItem = document.getElementById('bt-novo-item');



var criarTarefa = (evento) => {
    evento.preventDefault();

    const entrada = document.querySelector('[data-form-input]');
    const valor = entrada.value;
    const lista = document.querySelector('[data-lista]');// elemento da ul, pai da li
    
    console.log(lista);
    
    const conteudo = `<p class="content">${valor}</p>`; //template
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task')

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BtConcluir());
    tarefa.appendChild(BtDeletar());
    
    lista.appendChild(tarefa);


    
    entrada.value = " ";
    
}

btNovoItem.addEventListener('click',criarTarefa);

