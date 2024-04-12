const cerrarSesionButton = document.getElementById("cerrarSesionButton")

 cerrarSesionButton.addEventListener("click", ()=>{
         localStorage.removeItem('usuarioActual');
         console.log('Sesión cerrada. Usuario eliminado del localStorage.');
         window.location.href = "/formulario/login/login.html";
     })

     const verEstudiantes = document.getElementById("verEstudiantes")

     const user = JSON.parse(localStorage.getItem('usuarioActual'));
     console.log(user.role)
     const crearCursosLink = document.getElementById("crearCursosLink")

     if (user && user.role === 'admin') {
        crearCursosLink.style.display = 'block';
        verEstudiantes.style.display = 'block';
    } else {
        crearCursosLink.style.display = 'none';
        verEstudiantes.style.display = 'none';
    }
     






