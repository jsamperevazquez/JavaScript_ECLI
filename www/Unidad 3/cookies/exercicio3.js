document.getElementById('crearCookie').addEventListener('click', function () {

    document.cookie = "usuario=Angel";
    document.cookie = `data=${new Date().toLocaleDateString()}`;
});

document.getElementById('mostrarCookie').addEventListener('click', function () {

    let cookies = document.cookie.trim().split(';');
    let resultado = {};

    cookies.forEach(cookie => {
        let [key, value] = cookie.split('=');
        key = key.trim(); //tenemos que borrar espacios en blanco
        resultado[key] = value;
    });

    document.getElementById('cookieResultado').innerHTML = '';

    for (let clave in resultado) {
        document.getElementById('cookieResultado').innerHTML += clave + ": " + resultado[clave] + "<br>";
    }
});
