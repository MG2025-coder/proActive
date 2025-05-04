// Lógica para mostrar secciones al hacer scroll
const sections = document.querySelectorAll('.section');

const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
      section.classList.remove('hidden'); // <--- ¡esta línea es crucial!
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Estilo del Navbar al hacer scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});

// Lógica para mostrar información del servicio al hacer clic
document.querySelectorAll('.card-container').forEach(card => {
    card.addEventListener('click', () => {
        // Oculta todas las tarjetas de información primero
        document.querySelectorAll('.info-card').forEach(info => {
            info.classList.add('hidden');
        });

        // Muestra solo la tarjeta relacionada
        const key = card.getAttribute('data-service');
        const infoCard = document.getElementById('info-' + key);
        if (infoCard) {
            infoCard.classList.remove('hidden');    
        }

        // Llama a la función toggleMobileInfo para dispositivos móviles
        toggleMobileInfo(card);
    });
});

// Función para mostrar/ocultar información en dispositivos móviles
function toggleMobileInfo(card) {
    if (window.innerWidth <= 768) { // solo en móviles
        const next = card.nextElementSibling; // La siguiente tarjeta de info
        if (next && next.classList.contains('info-card')) {
            next.classList.toggle('hidden'); // Cambia la visibilidad
        }
    }
}
