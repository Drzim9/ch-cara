// Carrossel de slides (seu código original)
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.display = i === index ? 'block' : 'none';
  });
  slides[index].classList.add('active');
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);

// Animação na entrada dos elementos ao abrir a página
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('section, .card, .botao-orcamento');

  animatedElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, i * 100); // delay suave entre elementos
  });
});

 
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');


hamburger.addEventListener('click', () => {
  
  nav.classList.toggle('active');
});