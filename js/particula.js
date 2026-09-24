// --- PARTÍCULAS ---
function initParticles() {
  const container = document.getElementById('contactParticles');
  if (!container) return;
  const particleCount = 85;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 5 + 2 + 'px';
    const left = Math.random() * 100 + '%';
    const bottom = Math.random() * 20 + '%';
    const duration = Math.random() * 10 + 5 + 's';
    const delay = Math.random() * 5 + 's';
    const opacity = Math.random() * 0.5 + 0.2;

    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = left;
    particle.style.bottom = bottom;
    particle.style.setProperty('--duration', duration);
    particle.style.setProperty('--opacity', opacity);
    particle.style.animationDelay = delay;

    container.appendChild(particle);
  }
}
document.addEventListener('DOMContentLoaded', initParticles);