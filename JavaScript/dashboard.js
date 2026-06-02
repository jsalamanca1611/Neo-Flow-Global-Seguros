/* ══════════════════════════════════════════════════
   Simula una sesión con localStorage.
   No hay backend: solo guardamos una llave "sesion"
   y la borramos al cerrar sesión.
   ══════════════════════════════════════════════════ */
 
 
// ── 1. Protección de ruta ──────────────────────────────────────
// Al cargar la página verificamos si existe la llave "sesion".
// Si no existe → el usuario no inició sesión → lo enviamos al login.

if (!localStorage.getItem("sesion")) {
  window.location.href = "acceso.html#sesion";
}
 
 
// ── 2. Cerrar sesión ───────────────────────────────────────────
// Se llama desde el onclick del botón "Cerrar sesión"
// Borra la llave de localStorage y vuelve a la página principal.
function cerrarSesion() {
  localStorage.removeItem("sesion");    // elimina la sesión simulada
  window.location.href = "../index.html"; // redirige al inicio
}
 
 
// ── 3. Navegación activa del sidebar CON cambio de panel ──────


// Recogemos todos los paneles de contenido del dashboard en una lista.
// Así podemos ocultarlos todos de un solo golpe antes de mostrar el correcto.
var todosLosPaneles = [
  document.getElementById("panel-inicio"),
  document.getElementById("panel-pagos")
];


// Esta función oculta TODOS los paneles y luego muestra solo el que se le pida.
// Recibe el id del panel que queremos ver (ej: "panel-pagos").
function cambiarPanel(idDelPanel) {

  // Paso A: le ponemos "oculto" a cada panel de la lista
  todosLosPaneles.forEach(function(panel) {
    panel.classList.add("oculto");
  });

  // Paso B: buscamos el panel que nos pidieron y le quitamos "oculto"
  var elPanelQueQuieremos = document.getElementById(idDelPanel);
  elPanelQueQuieremos.classList.remove("oculto");


  // Si el panel que se abre es "Pagos", activamos su barra de progreso
  if (idDelPanel === "panel-pagos") {
    animarBarraDePagos();
  }

}

// Anima la barra del panel de pagos.
// Se llama desde cambiarPanel cada vez que el usuario abre ese panel.
function animarBarraDePagos() {

  var barraTotal = document.getElementById("barra-relleno-total");
  var textoTotal = document.getElementById("texto-progreso-pagos");

  // Reutilizamos las variables ya calculadas más abajo en este mismo archivo
  textoTotal.textContent =
    pagosRealizados + " de " + totalDePagos + " (" + porcentajeRedondeado + "%)";

  // Reiniciamos a 0 para que la animación se reproduzca cada vez que se abra el panel,
  // no solo la primera vez
  barraTotal.style.width = "0";

  setTimeout(function() {
    barraTotal.style.width = porcentajeRedondeado + "%";
  }, 100);
}





// Recogemos todos los ítems del menú lateral
const itemsNav = document.querySelectorAll(".nav-item");

itemsNav.forEach(function(item) {

  // Si el href apunta a una página real (ej: planes.html), no lo tocamos
  if (item.getAttribute("href") !== "#") return;

  item.addEventListener("click", function(evento) {
    evento.preventDefault(); // evita que "#" salte al tope de la página

    // Quitamos el estilo amarillo activo de todos los ítems
    itemsNav.forEach(function(i) {
      i.classList.remove("nav-activo");
    });

    // Se lo ponemos solo al ítem que se clickeó
    this.classList.add("nav-activo");

    // Leemos el atributo data-panel de este ítem
    // Si dice "panel-pagos" → mostramos pagos. Si dice "panel-inicio" → inicio.
    var idDelPanelObjetivo = this.getAttribute("data-panel");

    // Solo cambiamos el panel si el ítem tiene ese atributo definido
    if (idDelPanelObjetivo) {
      cambiarPanel(idDelPanelObjetivo);
    }
  });

});

/* ════════════════════════════════════════════════════════════════
   BARRA DE PROGRESO DINÁMICA
   ════════════════════════════════════════════════════════════════ */


// ── PASO 1: LOS DATOS ──────────────────────────────────────────

var totalDePagos    = 120;   // la meta completa del contrato
var pagosRealizados =  48;   // cuántos pagos ha hecho el cliente hasta hoy


// ── PASO 2: LA MATEMÁTICA ──────────────────────────────────────


var porcentajeExacto     = (pagosRealizados / totalDePagos) * 100;
// → 40 (en este caso justo, pero podría dar 33.33, 66.66, etc.)

var porcentajeRedondeado = Math.round(porcentajeExacto);
// Math.round convierte 40.0 → 40 y protege decimales raros como 33.33 → 33


/* ── PASO 3: BUSCAMOS LOS ELEMENTOS EN EL HTML */
var elementoBarra = document.getElementById("barra-relleno-pagos");
var elementoTexto = document.getElementById("texto-progreso");


/* ── PASO 4: ACTUALIZAMOS EL TEXTO */
// textContent reemplaza lo que hay dentro de la etiqueta HTML.


elementoTexto.textContent =
  pagosRealizados + " de " + totalDePagos + " (" + porcentajeRedondeado + "%)";


/* ── PASO 5: ANIMAMOS LA BARRA */

setTimeout(function() {

  // Convertimos el número 40 en el texto "40%" y lo asignamos como ancho.
  // El CSS transition detecta el cambio y lo convierte en movimiento suave.
  elementoBarra.style.width = porcentajeRedondeado + "%";

}, 100); // 100 milisegundos: suficiente para que el navegador haya pintado el estado inicial