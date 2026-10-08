const novaTarefa = document.querySelector('[data-form-button]');
const btNovoItem = document.getElementById('bt-novo-item');

var criarTarefa = (evento) => {
    evento.preventDefault();
    const entrada = document.querySelector('[data-form-input]');
    const valor = entrada.value;
    console.log(valor);
    valor.value = " ";
};

btNovoItem.addEventListener('click',criarTarefa);