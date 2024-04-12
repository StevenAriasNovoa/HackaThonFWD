// Obtener el usuario actual de la sesión
const usuarioActual = localStorage.getItem('usuarioActual');

// Verificar si hay un usuario actual en la sesión
if (usuarioActual) {
  try {
    // Convertir el usuario actual a objeto (si es necesario)
    const usuario = JSON.parse(usuarioActual);

    // Obtener el contenedor de las columnas
    const boxlist = document.getElementById('boxlist');

    // Crear un div para el usuario actual
    const usuarioDiv = document.createElement('div');
    usuarioDiv.classList.add('column');

    // Crear un fragmento de documento para agregar los elementos
    const fragmento = document.createDocumentFragment();

    // Crear elementos <p> para cada dato del usuario actual, excepto la contraseña
    Object.entries(usuario).forEach(([clave, valor]) => {
      if (clave !== 'contrasena' && clave !== 'id') {
        const p = document.createElement('li');
        p.textContent = `${clave.charAt(0).toUpperCase() + clave.slice(1)}: ${valor}`;
        fragmento.appendChild(p);
      }
    });

    // Agregar el fragmento al div del usuario actual
    usuarioDiv.appendChild(fragmento);

    // Agregar el div del usuario actual al contenedor de las columnas
    boxlist.appendChild(usuarioDiv);
  } catch (error) {
    console.error('Error al procesar el usuario actual:', error);
  }
} else {
  console.log('No se encontró un usuario actual en la sesión.');
}

// mostrar los cursos del usuario actual
function mostrarCursosUsuarioActual(usuarioActual, cursosGuardados, registroSesion) {
  const cursosUsuario = registroSesion.filter(registro => registro.userId === usuarioActual.id);
  const cursosIds = cursosUsuario.map(registro => registro.courseId);
  const cursos = cursosIds.map(cursoId => cursosGuardados[cursoId]);
  return cursos.map(curso => `Cursos matriculados: ${curso.titulo}`);
}
