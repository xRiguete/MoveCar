
const menuMobile = document.getElementById("menuMobile");
const menuLinks = document.getElementById("menuLinks");

function abrirMenu() {
    const menuAberto = menuLinks.classList.toggle("ativo");

    menuMobile.setAttribute("aria-expanded", menuAberto);
    menuMobile.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
}

/* ABRIR OU FECHAR AO CLICAR */
menuMobile.addEventListener("click", abrirMenu);

/* PERMITIR USO PELO TECLADO */
menuMobile.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        abrirMenu();
    }
});

/* FECHAR AO CLICAR EM UM LINK NO MOBILE */
menuLinks.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        if (window.innerWidth < 769) {
            menuLinks.classList.remove("ativo");
            menuMobile.setAttribute("aria-expanded", "false");
            menuMobile.setAttribute("aria-label", "Abrir menu");
        }
    });
});

/* AJUSTAR O MENU AO REDIMENSIONAR A TELA */
window.addEventListener("resize", function() {
    if (window.innerWidth >= 769) {
        menuLinks.classList.remove("ativo");
        menuMobile.setAttribute("aria-expanded", "false");
        menuMobile.setAttribute("aria-label", "Abrir menu");
    }
});
