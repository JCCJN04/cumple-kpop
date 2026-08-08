// ══════════════════════════════════════════════════════════════════
// GUERRAS K-POP — LÓGICA INTERACTIVA EN JAVASCRIPT CON SONIDO DE VIDEO
// ══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // 1. REPRODUCCIÓN DEL VIDEO HERO CON SONIDO AL TOCAR LA PANTALLA
  const heroVideo = document.getElementById('hero-video-player');

  if (heroVideo) {
    // Activar sonido con la primera interacción del usuario (política autoplay del navegador)
    const enableVideoAudioOnTouch = () => {
      heroVideo.muted = false;
      heroVideo.play().catch(() => {});
      document.removeEventListener('click', enableVideoAudioOnTouch);
      document.removeEventListener('touchstart', enableVideoAudioOnTouch);
      document.removeEventListener('scroll', enableVideoAudioOnTouch);
    };

    document.addEventListener('click', enableVideoAudioOnTouch, { once: true });
    document.addEventListener('touchstart', enableVideoAudioOnTouch, { once: true });
    document.addEventListener('scroll', enableVideoAudioOnTouch, { once: true });
  }

  // 2. CONFIGURACIÓN DEL CONTEO REGRESIVO EN TIEMPO REAL
  // Fecha objetivo: 15 de Noviembre de 2026 a las 17:00 HRS
  const eventTargetDate = new Date('November 15, 2026 17:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventTargetDate - now;

    if (distance < 0) {
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});
