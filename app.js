/* ==========================================================================
   GLOBALSEGUROS — SCRIPT PRINCIPAL
   ========================================================================== */

/* ── Scroll suave a una sección ──
   Si el destino es 'login', primero anima el cargador. */
function ir(id) {
  const cargador = document.getElementById('cargador');

  if (id === 'login' && cargador) {
    cargador.classList.add('activo');

    // Esperar a que la animación llegue a su punto más visible
    setTimeout(() => {
      document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' });
    }, 900);

    // Quitar la clase cuando termine la animación
    cargador.addEventListener('animationend', () => {
      cargador.classList.remove('activo');
    }, { once: true });

    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* ── Activar el cofre de la sección "viaje" ── */
function activarViaje() {
  document.getElementById('viaje').classList.add('activa');
}

/* ── Mostrar la sección de pago ── */
function mostrarPago() {
  const pago = document.getElementById('pago');
  pago.classList.add('visible');
  setTimeout(() => pago.scrollIntoView({ behavior: 'smooth' }), 120);
}

/* ── Mostrar mensaje de confirmación del formulario ── */
function mostrarOk() {
  document.getElementById('mensaje-ok').classList.add('visible');
}

/* ── Animación de aparición al hacer scroll ── */
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.aparecer').forEach(el => observador.observe(el));
