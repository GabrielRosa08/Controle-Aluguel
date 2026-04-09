// preciso primeiro criar uma função para alterar o botão

function alterarStatus(id) {
    let game_clicado = document.getElementById(`game-${id}`);

    let imagem = game_clicado.querySelector('.dashboard__item__img'); //. e para indicar que é uma classe
    let botao = game_clicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar' //pode ser o innerHTML tambem
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver'
    }

}
