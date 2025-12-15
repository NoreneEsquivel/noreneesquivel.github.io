// main.js - small helpers
document.addEventListener('DOMContentLoaded', function(){
  // highlight active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // basic form prevent default (since no backend)
  const form = document.querySelector('form');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Form submitted (demo). Add backend or Netlify forms to collect messages.');
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("capybara-rain");
  const CAPY_COUNT = 12; // number of capybaras

  for (let i = 0; i < CAPY_COUNT; i++) {
    createCapybara(i * 300); // stagger timing
  }

  function createCapybara(delay) {
    setTimeout(() => {
      const capy = document.createElement("img");
      capy.src = "assets/tangerine1.png";
      capy.className = "capybara";

      // random position + speed
      capy.style.left = Math.random() * 100 + "vw";
      capy.style.animationDuration = 3 + Math.random() * 3 + "s";

      container.appendChild(capy);

      // remove after animation
      setTimeout(() => {
        capy.remove();
      }, 7000);
    }, delay);
  }
});
