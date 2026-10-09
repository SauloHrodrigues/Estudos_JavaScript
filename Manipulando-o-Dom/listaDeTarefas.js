((() => {
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
    
    lista.appendChild(tarefa);


    
    entrada.value = " ";
    
}

btNovoItem.addEventListener('click',criarTarefa);

const BtConcluir = () => {
    const btConcluir = document.createElement('button');
    btConcluir.classList.add('check-button');
    btConcluir.innerText = 'concluir';

    btConcluir.addEventListener('click',concluirTarefa);
    return btConcluir;
}

const concluirTarefa = (evento) => {
   const botaoConcluir = evento.target; //pega o elemento que foi clicado
   const tarefaConcluida = botaoConcluir.parentElement; //pega o elemento li que contém o botão
    tarefaConcluida.classList.toggle('done'); //adiciona ou remove a classe 'done' do elemento li
}
})())