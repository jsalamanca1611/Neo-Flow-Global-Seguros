 /* Formulario flotante para contactar a un asesor */

// Paso 1: Inyectamos el modal en el body.
// El formulario ahora es una etiqueta <form> real para poder
// escuchar el evento "submit" y controlar qué pasa al enviarlo.
document.body.insertAdjacentHTML("beforeend", `
  <div class="fondo-modal" id="fondo-contacto" onclick="cerrarContacto()">
    <div class="modal" onclick="event.stopPropagation()">

      <button class="cerrar" type="button" onclick="cerrarContacto()">✕</button>
      <h2 class="titulo-modal">Contacta a un <span class="palabra-azul">asesor</span></h2>
      <p class="subtitulo-modal">Déjanos tus datos y un asesor se comunicará contigo.</p>

      <form id="formulario-contacto">
        <div class="campo">
          <label>Nombre completo</label>
          <input type="text" placeholder="Ej: María González" required>
        </div>
        <div class="campo">
          <label>Teléfono</label>
          <input type="tel" placeholder="Ej: 300 123 4567" required>
        </div>
        <div class="campo">
          <label>Correo electrónico</label>
          <input type="email" placeholder="Ej: maria@correo.com" required>
        </div>
        <div class="campo">
          <label>Mensaje</label>
          <input type="text" placeholder="¿En qué te podemos ayudar?">
        </div>
        <button type="submit" class="boton boton-azul boton-enviar">Contactar asesor</button>
      </form>

    </div>
  </div>
`);


// ── Referencias al DOM ──────────────────────────────────────────
const fondoContacto      = document.getElementById("fondo-contacto");
const formularioContacto = document.getElementById("formulario-contacto");
const pantallaExito      = document.getElementById("pantalla-exito");


// ── Abrir y cerrar el modal ─────────────────────────────────────
function abrirContacto()  { fondoContacto.classList.add("visible");    }
function cerrarContacto() { fondoContacto.classList.remove("visible"); }


// ── Qué ocurre al enviar el formulario ─────────────────────────
formularioContacto.addEventListener("submit", function(evento) {

  // Paso A: Evita que el navegador recargue la página
  evento.preventDefault();

  // Paso B: Cierra el modal
  cerrarContacto();

  // Paso C: Muestra la pantalla de éxito quitando la clase "oculto"
  // El "if" protege que no rompa en páginas sin esa sección
  if (pantallaExito) {
    pantallaExito.classList.remove("oculto");
  }

});