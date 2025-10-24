let clicks = 0;
let clicksDerecho = 0;
const boton = document.getElementById("button");

function contadorClicks() {
    clicks ++;
    document.getElementById("resultadoIzquierdo").innerText = `Número de clicks izquierdo: ${clicks}`;
    
}

boton.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // evita el menú contextual
    clicksDerecho++;
    document.getElementById("resultadoDerecho").innerHTML = 
        "Número de clicks derechos: " + clicksDerecho;
});
