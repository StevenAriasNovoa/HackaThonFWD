// Función para obtener datos del localStorage
function obtenerIdCursoDeUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')); 
}

function obtenerCursoPorId(cursoId) {
    const cursosGuardados = JSON.parse(localStorage.getItem('courses'));
    if (cursosGuardados) {
        const cursoEncontrado = cursosGuardados[cursoId];
        return cursoEncontrado;
    } else {
        console.log('No hay cursos guardados en localStorage.');
        return null;
    }
}

function mostrarDetallesCurso(curso) {
    if (curso) {
        const tituloElement = document.getElementById('titulo');
        const informacionElement = document.getElementById('informacion');
        const provinciaElement = document.getElementById('provincia');
        const actividadesElement = document.getElementById('actividades');
        const institucionElement = document.getElementById('institucion');

        tituloElement.textContent = curso.titulo;
        informacionElement.textContent = curso.informacion;
        provinciaElement.textContent = curso.provincia;
        actividadesElement.textContent = curso.actividades;
        institucionElement.textContent = curso.institucion;
    } else {
        console.log('El curso no fue encontrado.');
    }
}

const applyButton = document.getElementById('applyButton');

applyButton.addEventListener("click", function() {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    if (usuarioActual) {
        // Obtener el ID del curso de la URL
        const cursoId = obtenerIdCursoDeUrl();

        console.log('Sesión iniciada para:', usuarioActual.id);

        // Verificar si ya hay un registro de sesión en el localStorage
        let registroSesion = JSON.parse(localStorage.getItem('registroSesion')) || [];

        // Verificar si el usuario actual ya tiene un registro de este curso
        const registroUsuarioCurso = registroSesion.find(registro => registro.userId === usuarioActual.id && registro.courseId === cursoId);
        if (!registroUsuarioCurso) {
            // Si no existe un registro para este usuario y curso, agregar uno nuevo
            const nuevoRegistro = {
                userId: usuarioActual.id,
                courseId: cursoId,
                appliedAt: new Date().toISOString() // Agregar la fecha y hora de aplicación
            };
            console.log(nuevoRegistro)
            registroSesion.push(nuevoRegistro);
            localStorage.setItem('registroSesion', JSON.stringify(registroSesion));
            console.log('El usuario ha aplicado a este curso.');
        } else {
            console.log('El usuario ya ha aplicado a este curso.');
        }
    } else {
        console.log('No hay sesión iniciada. Por favor inicia sesión para aplicar a un curso.');
        // Aquí podrías redirigir al usuario a la página de inicio de sesión o mostrar un mensaje de error
    }
});
const user = JSON.parse(localStorage.getItem('usuarioActual'));
console.log(user.role)
const crearCursosLink = document.getElementById("crearCursosLink")

if (user && user.role === 'admin') {
   crearCursosLink.style.display = 'block';
} else {
   crearCursosLink.style.display = 'none';
}

const cerrarSesionButton = document.getElementById("cerrarSesionButton")

 cerrarSesionButton.addEventListener("click", ()=>{
         localStorage.removeItem('usuarioActual');
         console.log('Sesión cerrada. Usuario eliminado del localStorage.');
         window.location.href = "/formulario/login/login.html";
     })






// Obtener el curso por su ID de la URL y mostrar los detalles
const cursoId = obtenerIdCursoDeUrl();
const cursoSeleccionado = obtenerCursoPorId(cursoId);
mostrarDetallesCurso(cursoSeleccionado);
