/* Iniciar sesión" o "Registrarse */

const formSesion      = document.getElementById("form-sesion");
const formRegistro    = document.getElementById("form-registro");
const pestanaSesion   = document.getElementById("pestana-sesion");
const pestanaRegistro = document.getElementById("pestana-registro");

function actualizarVista() {
  const esRegistro = window.location.hash === "#registro";
  formRegistro.classList.toggle("oculto", !esRegistro);
  formSesion.classList.toggle("oculto", esRegistro);
  pestanaRegistro.classList.toggle("pestana-activa", esRegistro);
  pestanaSesion.classList.toggle("pestana-activa", !esRegistro);
}

actualizarVista();
window.addEventListener("hashchange", actualizarVista);

 
/* Simular inicio de sesión */

function iniciarSesion() {
  localStorage.setItem("sesion", "activa");
  window.location.href = "dashboard.html";
}
 
/* Simular registro de usuario nuevo */

function registrarUsuario() {
  localStorage.setItem("sesion", "activa");
  window.location.href = "dashboard.html";
}
 