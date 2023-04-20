const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Redirigimos al usuario a la página de inicio
  window.location.href = 'inicio.html';
});
// Obtener los elementos del formulario de inicio de sesión
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Obtener el enlace "Crear cuenta"
const createAccountLink = document.getElementById("create-account-link");

// Agregar un evento click al enlace "Crear cuenta"
createAccountLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevenir la acción por defecto del enlace

  // Obtener los valores ingresados en el formulario de inicio de sesión
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Guardar los valores en el almacenamiento local
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Redirigir a la pantalla de crear cuenta
  window.location.href = "crear-cuenta.html";
});

// Agregamos un event listener al botón de cerrar sesión
document.getElementById('cerrar-sesion').addEventListener('click', function() {
  // Eliminamos la información de sesión del usuario (puede ser mediante un backend o una cookie)
  // Redirigimos al usuario a la pantalla de inicio de sesión
  window.location.href = 'iniciar-sesion.html';
});
