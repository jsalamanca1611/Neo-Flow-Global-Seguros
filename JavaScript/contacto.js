/* Formulario flotante para contactar a un asesor */

document.body.insertAdjacentHTML("beforeend", `
  <div class="fondo-modal" id="fondo-contacto" onclick="cerrarContacto()">
    <div class="modal" onclick="event.stopPropagation()">
      <button class="cerrar" onclick="cerrarContacto()">✕</button>
      <h2 class="titulo-modal">Contacta a un <span class="palabra-azul">asesor</span></h2>
      <p class="subtitulo-modal">Déjanos tus datos y un asesor se comunicará contigo.</p>
      <div class="campo"><label>Nombre completo</label><input type="text" placeholder="Ej: María González"></div>
      <div class="campo"><label>Teléfono</label><input type="tel" placeholder="Ej: 300 123 4567"></div>
      <div class="campo"><label>Correo electrónico</label><input type="email" placeholder="Ej: maria@correo.com"></div>
      <div class="campo"><label>Mensaje</label><input type="text" placeholder="¿En qué te podemos ayudar?"></div>
      <button class="boton boton-azul boton-enviar">Contactar asesor</button>
    </div>
  </div>
`);

const fondoContacto = document.getElementById("fondo-contacto");
function abrirContacto()  { fondoContacto.classList.add("visible"); }
function cerrarContacto() { fondoContacto.classList.remove("visible"); }
