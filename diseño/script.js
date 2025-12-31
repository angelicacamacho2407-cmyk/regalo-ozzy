// 🔐 CAMBIA AQUÍ LA RESPUESTA CORRECTA
const respuestaCorrecta = "29/12/2025";

function verificar() {
  const respuesta = document.getElementById("respuesta").value.toLowerCase();
  const error = document.getElementById("error");

  if (respuesta === respuestaCorrecta) {
    document.getElementById("acceso").classList.add("oculto");
    document.getElementById("contenido").classList.remove("oculto");
  } else {
    error.innerText = "Pista: es algo que celebramos juntos 🎄";
  }
}

const mensajes = [
  "Quiero decirte que me haces sentir especial.",
  "Contigo todo se siente especial.",
  "A veces me dan miedo nuestras similitudes,",
  "pero al mismo tiempo son algo que me hace sentir especial.",
  "Eres único.",
  "Haces que me interesen cosas nuevas",
  "y que me exprese con total sinceridad.",
  "Causas muchas cosas en mí.",
  "Y te amo.",
  "¿Qué te puedo decir?",
  "Es tu culpa…",
  "por haberme enamorado.",
  "El regalo de Navidad más hermoso para mí.",
  "Te ama, Angélica C."
];

let indice = 0;

function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  const boton = document.getElementById("boton");

  if (indice < mensajes.length) {
    mensaje.innerText = mensajes[indice];
    indice++;
  } else {
    mensaje.innerHTML = "<div class='feliz-navidad'>Feliz Navidad 🎄</div>";
    boton.style.display = "none";
  }
}

