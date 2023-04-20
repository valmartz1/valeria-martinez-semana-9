const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Aquí podrías agregar tu lógica para validar el usuario y la contraseña
  
  // Si los datos son correctos, redirigimos al usuario a la página de inicio
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
// Obtener el elemento para mostrar el mensaje de bienvenida
const welcomeMessage = document.getElementById("welcome-message");

// Obtener los valores guardados en el almacenamiento local
const username = localStorage.getItem("username");

// Mostrar un mensaje de bienvenida al usuario
welcomeMessage.textContent = `Bienvenido, ${username}!`;

// Borrar los valores guardados del almacenamiento local al cerrar sesión
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  window.location.href = "inicio-sesion.html";
});

// Agregamos un event listener al botón de cerrar sesión
document.getElementById('cerrar-sesion').addEventListener('click', function() {
  // Eliminamos la información de sesión del usuario (puede ser mediante un backend o una cookie)
  // Redirigimos al usuario a la pantalla de inicio de sesión
  window.location.href = 'iniciar-sesion.html';
});
