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