const depoimentos = [
  {
    ref: "#VER-201-A",
    content: "Eu acreditava ter o controle da minha residência. Após a chegada da Reina, percebi que vivia em um estado de barbárie. Elas impuseram uma civilidade impossível.",
    author: "Julian V.",
    status: "Ordem Restaurada",
    rating: 5,
  },
  {
    ref: "#VER-202-B",
    content: "Contratei a Vivia Vane e perdi metade da minha coleção de relógios. O relatório dizia que eram 'distrações fúteis'. Minha produtividade subiu. Assustador.",
    author: "Marcus K.",
    status: "Sob Auditoria",
    rating: 4.5,
  },
  {
    ref: "#VER-203-C",
    content: "A Rika Kurobane me deu um sermão sobre a desonra de uma cama mal feita. Saí do quarto pedindo desculpas aos meus lençóis.",
    author: "Elena S.",
    status: "Reeducada",
    rating: 5,
  }
];

function renderTestimonials() {
  const grid = document.querySelector('.testimonials-grid');
  if (!grid) return;

  grid.innerHTML = depoimentos.map(d => `
    <article class="testimonial-item">
      <header class="testimonial-header">
        <span class="serial-number">REF-LOG: ${d.ref}</span>
      </header>

      <div class="testimonial-body">
        <i class="fa-solid fa-quote-left bg-quote quote-open"></i>
        <p class="testimonial-content">${d.content}</p>
        <i class="fa-solid fa-quote-right bg-quote quote-close"></i>
      </div>

      <hr class="v-divider">

      <footer class="testimonial-footer">
        <div class="testimonial-rating">
          ${generateStars(d.rating)}
        </div>
        <div class="author-meta">
          <span class="author-name">${d.author}</span>
          <span class="author-tag">Status: ${d.status}</span>
        </div>
      </footer>
    </article>
  `).join('');

  initScrollAnimation();
}

function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
  }
  return stars;
}

function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay cascata: cada card aparece um pouco depois do outro
        setTimeout(() => {
          entry.target.classList.add('v-animate-in');
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.testimonial-item').forEach(item => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', renderTestimonials);