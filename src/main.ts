import './style.css'
import {respuestas} from './datos.ts'

const boton = document.getElementById('boton')!;
const respuesta = document.getElementById('respuesta')!;
const pregunta = document.getElementById("pregunta") as HTMLInputElement;

boton.addEventListener("click", () => {
  if (pregunta.value === "hola") {
    respuesta.textContent = respuestas[4];
  } else if (pregunta.value === "te odio") {
    respuesta.textContent = respuestas[0];
  } else if (pregunta.value === "donde esta la biblioteca") {
    respuesta.textContent = respuestas[1];
  } else if (pregunta.value === "¿quien es lisa simpson?") {
    respuesta.textContent = respuestas[2];
  } else if (pregunta.value === "¿que tiempo hace hoy?") {
    respuesta.textContent = respuestas[3];
  } else {
    const random = Math.floor(Math.random() * respuestas.length);
    const respuestaElegida = respuestas[random];
    respuesta.textContent = respuestaElegida;
  }});