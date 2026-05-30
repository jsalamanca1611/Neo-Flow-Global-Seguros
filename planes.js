/* Solo abre y cierra */

const fondoModal = document.getElementById("fondo-modal");
const nombrePlan = document.getElementById("nombre-plan");

function abrirFormulario(plan) {
  nombrePlan.textContent = plan;
  fondoModal.classList.add("visible");
}
function cerrarFormulario() {
  fondoModal.classList.remove("visible");
}