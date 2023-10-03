document.getElementById("entrar-button").addEventListener("click", function() {
    // Quando o botão "Entrar" é clicado, esconde a tela inicial e mostra a tela da lista de vinhos.
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".wine-list-screen").style.display = "block";
});