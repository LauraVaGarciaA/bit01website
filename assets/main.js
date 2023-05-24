'use strict'

//NOMBRE//
let nombres = document.getElementById('nombre');
nombres.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//APELLIDO//
let apellidos = document.getElementById('apellido');
apellidos.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//DEPARTAMENTO//
// Obtén el elemento select por su ID
let departamento = document.getElementById('departamento');

// Función para imprimir la opción seleccionada
function imprimirOpcionSeleccionada() {
  // Obtén la opción seleccionada
  let opcionSeleccionada = departamento.options[departamento.selectedIndex];
  // Accede al valor y texto de la opción seleccionada
  let valorSeleccionado = opcionSeleccionada.value;
  let textoSeleccionado = opcionSeleccionada.text;
  // Imprime la opción seleccionada
  console.log('Opción seleccionada:', textoSeleccionado);
}
// Imprimir la opción seleccionada inicial
imprimirOpcionSeleccionada();
// Actualizar la opción seleccionada cuando cambie
departamento.addEventListener('change', function() {
  imprimirOpcionSeleccionada();
});

//CIUDAD//

let ciudad = document.getElementById('ciudad');
function obtenerCiudad() {
  let opcionSeleccionada = ciudad.options[ciudad.selectedIndex];
  let valorSeleccionado = opcionSeleccionada.value;
  let textoSeleccionado = opcionSeleccionada.text;

  console.log('Opción seleccionada:', textoSeleccionado);
}

obtenerCiudad();

ciudad.addEventListener('change', function() {
  obtenerCiudad();
});

//CELULAR//
let celular = document.getElementById('telefono');
telefono.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//CORREO ELECTRÓNICO//
let email = document.getElementById('correo');
email.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//SEXO//
let sexo = document.getElementById('sexo');
function obtenerSexo() {
  let opcionSeleccionada = sexo.options[sexo.selectedIndex];
  let valorSeleccionado = opcionSeleccionada.value;
  let textoSeleccionado = opcionSeleccionada.text;

  console.log('Opción seleccionada:', textoSeleccionado);
}

obtenerSexo();

sexo.addEventListener('change', function() {
  obtenerSexo();
});

//FECHA DE NACIMIENTO//
let dateInput = document.getElementById('date');
dateInput.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//TÉRMINOS Y CONDICIONES//
let privacidad = document.getElementById('aceptar');
privacidad.addEventListener('input', (e) =>{
  console.log(e.target.value);
});




