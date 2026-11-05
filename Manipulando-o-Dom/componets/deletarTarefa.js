const BtDeletar = () => {
    const btDeletar = document.createElement('button');
    btDeletar.classList.add('delete-button');
    btDeletar.innerText = 'deletar';

    btDeletar.addEventListener('click',removerTarefa);
    return btDeletar;
}

const removerTarefa = (evento) => {
    const btDeletar = evento.target;
    const tarefaADeletar = btDeletar.parentElement;
    tarefaADeletar.remove();
}

export default BtDeletar;