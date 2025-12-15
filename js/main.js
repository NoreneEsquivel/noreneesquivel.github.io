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

// Lightbox: open images, GIFs and PDFs fullscreen from portfolio
document.addEventListener('DOMContentLoaded', () => {
  // create lightbox element if not present
  if (!document.getElementById('lightbox')){
    const lb = document.createElement('div');
    lb.id = 'lightbox'; lb.className = 'hidden';
    lb.innerHTML = '<button class="lightbox-close" aria-label="Close">×</button><div class="lightbox-content"></div>';
    document.body.appendChild(lb);
  }

  const lightbox = document.getElementById('lightbox');
  const content = lightbox.querySelector('.lightbox-content');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(type, src){
    content.innerHTML = '';
    if (type === 'image'){
      const img = document.createElement('img'); img.src = src; img.alt = '';
      img.style.maxWidth = '100%';
      img.style.maxHeight = '90vh';
      img.style.objectFit = 'contain';
      content.appendChild(img);
    } else if (type === 'pdf'){
      const iframe = document.createElement('iframe'); iframe.src = src; iframe.setAttribute('frameborder','0');
      iframe.style.width = '100%';
      iframe.style.height = '80vh';
      iframe.style.border = '0';
      content.appendChild(iframe);
    }
    lightbox.classList.remove('hidden');
  }

  function closeLightbox(){
    lightbox.classList.add('hidden');
    content.innerHTML = '';
  }

  // delegate clicks from .embed-open buttons
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.embed-open');
    if (!btn) return;
    const type = btn.getAttribute('data-type') || 'image';
    const src = btn.getAttribute('data-src');
    if (src) openLightbox(type, src);
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
});
