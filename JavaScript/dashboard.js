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