
function tocaSom (seletorDeElementoAudio) {
   const elementoAudio = document.querySelector(seletorDeElementoAudio);
  if(elementoAudio === null){
    alert('Elemento não encontrado!');
  } else if(elementoAudio.localName === 'audio') {
            elementoAudio.play();
  } else {
    console.log('Elemento não é um áudio');
    console.log(elementoAudio);

  }
//    elementoAudio.play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');
//let contador = 0;

//while (contador < listaDeTeclas.length) {
  for(let contador = 0; contador < listaDeTeclas.length; contador++){  
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // template string (entre crase) - permite interpolar variáveis dentro de uma string 
    const idAudio = `#som_${instrumento}`; 


    tecla.onclick = function () { // função anônima
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
            console.log(evento.code);
       if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
       }
    };
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    //contador++;

}

// console.log(idAudio);