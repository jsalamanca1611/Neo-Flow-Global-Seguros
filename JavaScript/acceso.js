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
 
  // Recoge todos los inputs del formulario de sesión
  const camposSesion = document.querySelectorAll("#form-sesion input");
 
  // Revisa si algún campo está vacío (trim ignora espacios en blanco)
  const hayVacio = [...camposSesion].some(function(campo) {
    return campo.value.trim() === "";
  });
 
  // Si hay vacíos → muestra la alerta y detiene la función
  if (hayVacio) {
    document.getElementById("error-sesion").classList.remove("oculto");
    return;
  }
 
  // Todo completo → oculta la alerta y entra al dashboard
  document.getElementById("error-sesion").classList.add("oculto");
  localStorage.setItem("sesion", "activa");
  window.location.href = "dashboard.html";
}

/* Simular registro de usuario nuevo */

function registrarUsuario() {
 
  // Recoge todos los inputs del formulario de registro
  const camposRegistro = document.querySelectorAll("#form-registro input");
 
  // Revisa si algún campo está vacío
  const hayVacio = [...camposRegistro].some(function(campo) {
    return campo.value.trim() === "";
  });
 
  // Si hay vacíos → muestra la alerta y detiene la función
  if (hayVacio) {
    document.getElementById("error-registro").classList.remove("oculto");
    return;
  }
 
  // Todo completo → oculta la alerta y entra al dashboard
  document.getElementById("error-registro").classList.add("oculto");
  localStorage.setItem("sesion", "activa");
  window.location.href = "dashboard.html";
}
 