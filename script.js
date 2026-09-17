const botao = document.getElementById('btn-tema');

botao.addEventListener('click', () => {
    alert('O botão foi clicado!');
    document.body.classList.toggle('modo-claro');
});
