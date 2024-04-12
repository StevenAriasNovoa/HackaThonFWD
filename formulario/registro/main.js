const inputNombre = document.getElementById("InputNombre")
const InputCorreo = document.getElementById("inputCorreo")
const inputContrasena = document.getElementById("inputContrasena")
const inputConfirmPassword = document.getElementById("inputConfirmPassword")
const btnRegistrarse = document.getElementById("btnRegistrarse")


btnRegistrarse.addEventListener("click", () => {
    // Obtener los valores de los campos de entrada
    const inputNombreValue = inputNombre.value.trim();
    const inputCorreoValue = inputCorreo.value.trim();
    const inputContrasenaValue = inputContrasena.value.trim();
    const inputConfirmPasswordValue = inputConfirmPassword.value.trim();
    
    // Verificar si alguno de los campos está vacío
    if (inputNombreValue === '' || inputCorreoValue === '' || inputContrasenaValue === '' || inputConfirmPasswordValue === '') {
        // Mostrar un mensaje de error
        alert('Por favor completa todos los campos');
        return; // Detener la ejecución de la función
    }

    // Verificar si las contraseñas coinciden
    if (inputContrasenaValue !== inputConfirmPasswordValue) {
        // Mostrar un mensaje de error
        alert('Las contraseñas no coinciden');
        return; // Detener la ejecución de la función
    }
    
    // Obtener los usuarios del localStorage
    let usuarios = JSON.parse(localStorage.getItem("users")) || [];
    
    // Obtener el ID del nuevo usuario
    const UserId = usuarios.length + 1;

    // Crear un nuevo objeto de usuario
    const nuevoUsuario = {
        id: UserId,
        nombre: inputNombreValue,
        correo: inputCorreoValue,
        contrasena: inputContrasenaValue,
        role: "admin" // Establecer el rol como "usuario" por defecto
    };

    // Agregar el nuevo usuario al array de usuarios
    usuarios.push(nuevoUsuario);

    // Guardar los usuarios en el localStorage
    localStorage.setItem('users', JSON.stringify(usuarios));

    // Redireccionar a otra página
    window.location.href = "/formulario/login/login.html";
});


        

