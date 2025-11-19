// Obtener el botón
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Mostrar el botón cuando el usuario se desplaza hacia abajo
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Muestra el botón
    } else {
        scrollToTopBtn.style.display = "block"; // Oculta el botón
    }
};

// Al hacer clic en el botón, desplazar suavemente hacia arriba
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
};