const cursosGuardados = JSON.parse(localStorage.getItem('courses'));
const containerCards = document.getElementById("children");


// Funcion para crear elementos de cursos
function courses(cursoInfo, id) {
    // Crear un contenedor div para el curso
    const divValue = document.createElement("div");
    divValue.classList.add("course-container");

    // Crear un párrafo para el título del curso
    const pTitulo = document.createElement("p");
    pTitulo.textContent = `${cursoInfo.titulo}`;
    pTitulo.classList.add("course-title");

    // Crear un párrafo para la institución que imparte el curso
    const pInstitucion = document.createElement("p");
    pInstitucion.textContent = `Institución que imparte: ${cursoInfo.institucion}`;
    pInstitucion.classList.add("course-institution");

    // Crear un botón para ver la descripción del curso
    const descriptionButton = document.createElement("button");
    descriptionButton.textContent = "Ver Descripción";
    descriptionButton.classList.add("description-button");
    descriptionButton.addEventListener("click", function() {
        // Redirigir a la página de descripción del curso
        // Puedes pasar algún identificador del curso como parámetro si es necesario
        window.location.href = `../../description/description.html?id=${id}`;
    });

    // Agregar elementos al contenedor div
    divValue.appendChild(pTitulo);
    divValue.appendChild(pInstitucion);
    divValue.appendChild(descriptionButton);

    // Agregar el contenedor div al contenedor principal (containerCards en este caso)
    containerCards.appendChild(divValue);
}


// Verificar si hay cursos guardados en localStorage
if (cursosGuardados) {
    cursosGuardados.forEach((curso, index) => {
        courses(curso, index); 
    });
} else {
    console.log('No hay cursos guardados en localStorage.');
}



function limpiarResultados() {
    while (containerCards.firstChild) {
        containerCards.removeChild(containerCards.firstChild);
    }
}

function filtrarCursos(titulo) {
    limpiarResultados(); 
    var resultadosDiv = document.getElementById('resultadosCursos');

    if (cursosGuardados) {
        const cursosFiltrados = cursosGuardados.filter(curso => { 
            const tituloCoincide = curso.titulo.toLowerCase().includes(titulo.toLowerCase());
            return tituloCoincide;
        });

        if (cursosFiltrados.length > 0) {
            cursosFiltrados.forEach(curso => {
                courses(curso);
            });
        } else {
            mostrarMensaje("No hay cursos disponibles que coincidan con el título proporcionado");
        }
    } else {
        console.log('No hay cursos guardados en localStorage.');
    }
}

document.getElementById('filtrarBoton').addEventListener('click', function() {
    var tituloInput = document.getElementById('textBuscador').value.trim();
    filtrarCursos(tituloInput);
});

document.getElementById('textBuscador').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        var tituloInput = this.value.trim();
        filtrarCursos(tituloInput);
    }
});

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




