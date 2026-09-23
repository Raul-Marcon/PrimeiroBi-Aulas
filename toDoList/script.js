const input = document.getElementById('inputTexto');
const botao = document.getElementById('botao');
const lista = document.getElementById('minhaLista');

    lista.addEventListener('click',function(evento){
        if(evento.target && evento.target.nodeName === 'LI'){
            evento.target.remove();
        }
    });

    function adicionarItem() {
        const texto = input.value.trim();

        if (texto === '') {
            alert('Por favor, digite algo antes de adicionar!');
            return;
        }
        const novaLi = document.createElement('li');
        novaLi.textContent = texto;

        lista.appendChild(novaLi);

        input.value = '';
        input.focus();
    }

    botao.addEventListener('click', adicionarItem);

    input.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        adicionarItem();
    }
});