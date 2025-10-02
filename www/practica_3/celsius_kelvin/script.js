function conversorCelsiusK() {
    event.preventDefault(); // evito que se recarge la página para poder mostrar los resultados
    let gradosKelvin = parseFloat(271.15 + document.getElementById("grados").value)

    // Muestro en cada fila el area y el perímetro con 2 decimales con toFixed()
    document.getElementById("grdC").innerText = parseFloat(document.getElementById("grados").value).toFixed(2) + " Cº"
    document.getElementById("grdK").innerText = gradosKelvin.toFixed(2) + " K";

    // quito el hidden para mostrar los resultados
    document.getElementById("resultados").hidden = false;

    // Mensaje de cálculo realizado con éxito
    document.getElementById("mensaje").innerText = "¡Cálculo realizado!";


}
