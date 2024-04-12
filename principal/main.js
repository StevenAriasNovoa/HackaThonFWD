function cargarPagina(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contenido").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function cargarContenido() {
    var ruta = window.location.hash.substr(1);
    var contenido = document.getElementById('contenido');

    switch (ruta) {
        case '/':
            cargarPagina('login.html');
            break;
        case '/':
            cargarPagina('.html');
            break;
        case '/':
            cargarPagina('.html');
            break;
        default:
            contenido.innerHTML = '<h2>Página no encontrada</h2>';
    }
}

window.addEventListener('hashchange', cargarContenido);
cargarContenido()

function verificarRegistro() {
    var usuarioRegistrado = false; 
    if (!usuarioRegistrado) {
        window.location.href = "/formulario/login/login.html";
    } else {
        cargarPagina('login.html');
    }
}
