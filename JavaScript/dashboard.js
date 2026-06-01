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
 
 
// ── 3. Navegación activa del sidebar ──────────────────────────
// Al hacer clic en un ítem del menú:
//   → quitamos "nav-activo" de todos
//   → se lo ponemos solo al clickeado
 
const itemsNav = document.querySelectorAll(".nav-item");
 
itemsNav.forEach(function(item) {
 
  // Si el href apunta a una página real, no lo interceptamos
  if (item.getAttribute("href") !== "#") return;
 
  item.addEventListener("click", function(evento) {
    evento.preventDefault(); // evita que "#" lleve al tope de la página
 
    // Quita el estilo activo de todos los ítems
    itemsNav.forEach(function(i) {
      i.classList.remove("nav-activo");
    });
 
    // Lo pone en el ítem clickeado
    this.classList.add("nav-activo");
  });
 
});
 