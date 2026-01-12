// ─────────────────────────────
// 🧹 Header scroll e menu mobile
// ─────────────────────────────
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// Função para abrir/fechar menu mobile
const toggleMenu = () => {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
}

// Scroll effect + glassmorphism
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
        header.classList.remove('transparent');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
    }
});

// Toggle menu hamburguer
menuToggle.addEventListener('click', toggleMenu);

// Fecha menu ao clicar fora
mobileMenu.addEventListener('click', (e) => {
    if(e.target === mobileMenu) {
        toggleMenu();
    }
});
