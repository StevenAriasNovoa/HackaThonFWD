const InputTitulo = document.getElementById("InputTitulo");
const InputInstitucion = document.getElementById("InputInstitucion");
const InputInformacion = document.getElementById("inputInformacion");
const InputCategoria = document.getElementById("InputCategoria");
const SelectProvincia = document.getElementById("SelectProvincia");
const InputActividades = document.getElementById("InputActividades");
const btnCreateCourses = document.getElementById("btnCreateCureses");



btnCreateCourses.addEventListener("click", () => {
    const tituloValue = InputTitulo.value;
    const institucionValue = InputInstitucion.value;
    const informacionValue = InputInformacion.value;
    const categoriaValue = InputCategoria.value;
    const provinciaValue = SelectProvincia.value;
    const actividadesValue = InputActividades.value;

    let cursos = JSON.parse(localStorage.getItem("courses"));
    
    if (cursos === null) {
        cursos = [];
    }
    const courseId = cursos.length + 1;
    const nuevoCurso = {
        id: courseId,
        titulo: tituloValue,
        institucion: institucionValue,
        informacion: informacionValue,
        categoria: categoriaValue,
        provincia: provinciaValue,
        actividades: actividadesValue
    };
    cursos.push(nuevoCurso);

    localStorage.setItem('courses', JSON.stringify(cursos));

    const savedCourses = JSON.parse(localStorage.getItem('courses'));
    if (savedCourses) {
        // Los datos se guardaron correctamente en localStorage
        // Redireccionar a otra página
        window.location.href = "/pages/about/index.html";
    } else {
        // Error al guardar en localStorage
        console.error('Error al guardar los datos en localStorage');
    }
});

