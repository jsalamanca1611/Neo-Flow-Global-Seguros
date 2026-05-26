/* ── Scroll suave a sección ── */
function ir(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

/* ── Animación de revelado al hacer scroll ── */
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('vis');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── Viaje: activa el estado del cofre ── */
function activarViaje() {
  document.getElementById('viaje').classList.add('section-viaje--activa');
}

/* ── Pago: revela la sección y baja la pantalla ── */
function mostrarPago() {
  const pago = document.getElementById('pago');
  pago.classList.add('pago--visible');
  setTimeout(() => pago.scrollIntoView({ behavior: 'smooth' }), 120);
}

// ============================================================================
// PAGE LOADER · Intercepta ir('login') para reproducir la animación
// ============================================================================
(() => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;

  const irOriginal = window.ir;

  window.ir = (destino) => {
    if (destino !== 'login') return irOriginal?.(destino);

    loader.classList.add('is-active');
    setTimeout(() => irOriginal?.('login'), 900);
    loader.addEventListener('animationend', () => {
      loader.classList.remove('is-active');
    }, { once: true });
  };
})();
