const BtConcluir = () => { // Quando a função for um componente, a primeira letra deve ser maiúscula
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

export default BtConcluir;