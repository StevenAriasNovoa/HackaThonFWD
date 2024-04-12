const correo = document.getElementById("InputCorreo");
const contrasena = document.getElementById("InputContrasena");
const btnIniciarSesion = document.getElementById("btnIniciarsesion");

btnIniciarSesion.addEventListener("click", () => {
    const correoValue = correo.value;
    const contrasenaValue = contrasena.value;

    // Obtener los datos del localStorage
    const usuarios = JSON.parse(localStorage.getItem("users")) || [];

    // Buscar el usuario que coincida con el correo y la contraseña
    const usuarioRegistrado = usuarios.find(usuario => usuario.correo === correoValue && usuario.contrasena === contrasenaValue);


    if (usuarioRegistrado) {
        // Si se encontró un usuario, guardar el usuario actual en el localStorage
        localStorage.setItem("usuarioActual", JSON.stringify(usuarioRegistrado));
        // Redireccionar a otra página
        window.location.href = "/pages/about/index.html";
    } else {
        // Si no se encontró un usuario, mostrar un mensaje de error
        alert("Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
});

// Función para cerrar sesión
function cerrarSesion() {
    // Eliminar el usuario actual del localStorage al cerrar la sesión
    localStorage.removeItem("usuarioActual");
    // Redireccionar a la página de inicio de sesión
    window.location.href = "/formulario/registro/registro.html";
}

// Llamar a la función de cerrar sesión cuando sea necesario
// Por ejemplo, en un botón de "Cerrar sesión" en la interfaz de usuario
// <button onclick="cerrarSesion()">Cerrar sesión</button>
