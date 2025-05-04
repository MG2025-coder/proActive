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

// ESTILO NAV
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  
// PRUEBA


document.querySelectorAll('.card-container').forEach(card => {
    card.addEventListener('click', () => {
        // Oculta todas las tarjetas de info primero
        document.querySelectorAll('.info-card').forEach(info => {
            info.classList.add('hidden');
        });

        // Muestra solo la tarjeta relacionada
        const key = card.getAttribute('data-service');
        const infoCard = document.getElementById('info-' + key);
        if (infoCard) {
            infoCard.classList.remove('hidden');    
            
        }
    });
});


