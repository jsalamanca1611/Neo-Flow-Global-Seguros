/* ═══════════════════════════════════════════════════════════════
   HISTORIAL DE PAGOS — historial.js
   Misión: tomar un arreglo de datos y pintarlo como tabla en el DOM.
   ═══════════════════════════════════════════════════════════════ */


/* PASO 1 — Base de datos simulada
   Cada objeto representa un pago con 4 propiedades. */

var baseDeDatosSimulada = [
  { fecha: "15 Sep 2025", concepto: "Cuota mensual — GlobalUniversidad", monto: "$480.000", estado: "Pendiente" },
  { fecha: "15 Ago 2025", concepto: "Cuota mensual — GlobalUniversidad", monto: "$480.000", estado: "Pagado"   },
  { fecha: "15 Jul 2025", concepto: "Cuota mensual — GlobalUniversidad", monto: "$480.000", estado: "Pagado"   },
  { fecha: "15 Jun 2025", concepto: "Cuota mensual — GlobalUniversidad", monto: "$480.000", estado: "Pagado"   },
  { fecha: "15 May 2025", concepto: "Cuota mensual — GlobalUniversidad", monto: "$480.000", estado: "En mora"  }
];


/* PASO 2 — Traduce el texto del estado en una clase CSS */

function obtenerClaseDeEstado(estado) {
  if (estado === "Pagado")   return "estado-pagado";
  if (estado === "Pendiente") return "estado-pendiente";
  return "estado-mora";
}


/* PASO 3 — Convierte UN objeto en una fila HTML */

function construirFilaDeTabla(pago) {
  var claseDelEstado = obtenerClaseDeEstado(pago.estado);

  return `
    <tr>
      <td>${pago.fecha}</td>
      <td>${pago.concepto}</td>
      <td><strong>${pago.monto}</strong></td>
      <td><span class="estado-pago ${claseDelEstado}">${pago.estado}</span></td>
    </tr>
  `;
}


/* PASO 4 — Función principal: construye la tabla y la inyecta en el DOM */

function mostrarPagosEnPantalla() {

  var contenedor = document.getElementById("contenedor-historial");

  // Inyectamos la tabla con cabeceras pero sin filas todavía
  contenedor.innerHTML = `
    <table class="tabla-pagos">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Concepto</th>
          <th>Monto</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody id="cuerpo-tabla"></tbody>
    </table>
  `;

  var cuerpoDeLaTabla = document.getElementById("cuerpo-tabla");

  // Recorremos cada pago y pegamos su fila al final del tbody
  baseDeDatosSimulada.forEach(function(pago) {
    cuerpoDeLaTabla.innerHTML = cuerpoDeLaTabla.innerHTML + construirFilaDeTabla(pago);
  });

  // Mostramos el conteo encima de la tabla
  document.getElementById("resumen-historial").textContent =
    "Mostrando " + baseDeDatosSimulada.length + " pagos registrados";
}


/* INICIO — Esperamos a que el HTML cargue antes de arrancar */

document.addEventListener("DOMContentLoaded", function() {
  mostrarPagosEnPantalla();
});