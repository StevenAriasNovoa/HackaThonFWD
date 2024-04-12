// Función para obtener datos del localStorage
function obtenerDatosLocalStorage() {
    return new Promise((resolve, reject) => {
        const sesionIniciada = JSON.parse(localStorage.getItem('users'));
        const cursosGuardados = JSON.parse(localStorage.getItem('courses'));
        const registroSesion = JSON.parse(localStorage.getItem('registroSesion'));

        // Verificar si todos los datos existen
        if (sesionIniciada && cursosGuardados && registroSesion) {
            resolve({ sesionIniciada, cursosGuardados, registroSesion });
        } else {
            reject('No se encontraron datos en localStorage.');
        }
    });
}

// Función para mostrar los cursos del estudiante seleccionado
// Función para mostrar los cursos del estudiante seleccionado
function mostrarCursosEstudiante(estudianteId, cursosGuardados, registroSesion) {
    const cursosEstudiante = registroSesion.filter(registro => registro.userId === estudianteId);
    const cursosIds = cursosEstudiante.map(registro => registro.courseId);
    const cursos = cursosIds.map(cursoId => cursosGuardados[cursoId]);
    return cursos.map(curso => `Cursos matriculados: ${curso.titulo}`);
}


// Usar async/await para esperar la carga de datos
async function cargarDatos() {
    try {
        const { sesionIniciada, cursosGuardados, registroSesion } = await obtenerDatosLocalStorage();

        // Mostrar la lista de estudiantes en el HTML
        const listaEstudiantes = document.getElementById('listaEstudiantes');
        sesionIniciada.forEach(estudiante => {
            const listItem = document.createElement('li');
            listItem.textContent = estudiante.nombre;
            listItem.addEventListener('click', () => mostrarCursosDeEstudiante(estudiante.id, cursosGuardados, registroSesion));
            listaEstudiantes.appendChild(listItem);
        });
        
    } catch (error) {
        console.log(error);
    }
}

// Función para mostrar los cursos del estudiante seleccionado
function mostrarCursosDeEstudiante(estudianteId, cursosGuardados, registroSesion) {
    const cursos = mostrarCursosEstudiante(estudianteId, cursosGuardados, registroSesion);
    const infoEstudiante = document.getElementById('infoEstudiante');
    infoEstudiante.innerHTML = ''; // Limpiar el contenido anterior

    if (cursos.length > 0) {
        const listaCursos = document.createElement('ul');
        cursos.forEach(curso => {
            const listItem = document.createElement('li');
            listItem.textContent = curso;
            listaCursos.appendChild(listItem);
        });
        infoEstudiante.appendChild(listaCursos);
    } else {
        infoEstudiante.textContent = 'El estudiante no está inscrito en ningún curso.';
    }
}

// Llamar a la función para cargar datos
cargarDatos();
