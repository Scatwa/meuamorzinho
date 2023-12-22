document.addEventListener("DOMContentLoaded", function () {
    // Este evento é acionado quando o DOM é totalmente carregado

    // Simulando um atraso no carregamento (pode ser removido em um ambiente de produção)
    setTimeout(function () {
        document.querySelector(".loader-container").style.display = "none";
    }, 2000); // Tempo de simulação em milissegundos
});
