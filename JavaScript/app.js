

const tarjetas = document.querySelectorAll(".tarjeta-plan");
const puntos   = document.querySelectorAll(".punto");
const cofre    = document.getElementById("imagen-cofre");

const imagenesCofre = [
  "https://jps-dev.sirv.com/Images/image_1__1_-removebg-preview.png",
  "https://jps-dev.sirv.com/Images/Gemini_Generated_Image_b4kniqb4kniqb4kn-removebg-preview.png",
  "https://jps-dev.sirv.com/Images/Gemini_Generated_Image_vucb5hvucb5hvucb-removebg-preview.png"
];

let planActual = 0;

function mostrarPlan(numero) {
  planActual = (numero + tarjetas.length) % tarjetas.length;
  tarjetas.forEach((tarjeta, i) => {
    tarjeta.classList.toggle("tarjeta-activa", i === planActual);
    puntos[i].classList.toggle("punto-activo", i === planActual);
  });
  cofre.style.opacity = "0";
  cofre.src = imagenesCofre[planActual];
}

cofre.addEventListener("load", () => { cofre.style.opacity = "1"; });

function cambiarPlan(direccion) {
  mostrarPlan(planActual + direccion);
}