// --- LÓGICA DE TRADUCCIÓN ---
const btnLang = document.getElementById('btn-lang');
const textsToTranslate = document.querySelectorAll('.translate');

btnLang.addEventListener('click', (e) => {
  e.preventDefault(); // Evita que la pantalla salte al inicio al hacer click

  const currentLang = document.documentElement.lang === 'es' ? 'en' : 'es';
  document.documentElement.lang = currentLang;

  btnLang.textContent = currentLang === 'es' ? '🔄En' : '🔄Es';

  textsToTranslate.forEach(element => {
    element.textContent = element.getAttribute(`data-${currentLang}`);
  });
});