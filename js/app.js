// Função que altera o status do botão entre "Alugar" e "Devolver"
function alterarStatus(gameId) {
    // Seleciona o botão do item clicado
    const button = document.querySelector(`#game-${gameId} .dashboard__item__button`);
    const item = document.querySelector(`#game-${gameId}`);
    
    // Verifica o texto atual do botão para determinar a ação
    if (button.textContent === "Alugar") {
        // Alugar: altera para "Devolver" e aplica a classe de devolução
        button.textContent = "Devolver";
        button.classList.add("dashboard__item__button--return");
        button.classList.remove("dashboard__item__button--rent");
        item.querySelector(".dashboard__item__img").classList.add("dashboard__item__img--rented");
    } else {
        // Devolver: altera para "Alugar" e remove a classe de devolução
        button.textContent = "Alugar";
        button.classList.add("dashboard__item__button--rent");
        button.classList.remove("dashboard__item__button--return");
        item.querySelector(".dashboard__item__img").classList.remove("dashboard__item__img--rented");
    }
}
