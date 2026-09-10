const btnLang = document.getElementById('btn-lang');
const textsToTranslate = document.querySelectorAll('.translate');

// Función central para cambiar y aplicar el idioma
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  btnLang.textContent = lang === 'es' ? '🔄En' : '🔄Es';

  textsToTranslate.forEach(element => {
    const translation = element.getAttribute(`data-${lang}`);
    if (translation) {
      element.textContent = translation;
    }
  });

  // Guardamos la preferencia en el navegador
  localStorage.setItem('userLang', lang);
}

// 1. Al cargar la página, verificamos si hay un idioma guardado
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('userLang');
  
  // Si hay un idioma guardado y es distinto al actual, lo aplicamos
  if (savedLang && savedLang !== document.documentElement.lang) {
    applyLanguage(savedLang);
  }
});

// 2. Evento del botón para alternar el idioma
btnLang.addEventListener('click', (e) => {
  e.preventDefault();
  
  const newLang = document.documentElement.lang === 'es' ? 'en' : 'es';
  applyLanguage(newLang);
});