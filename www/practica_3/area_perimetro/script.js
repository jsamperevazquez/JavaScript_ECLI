function calcularAreaPerimetro() {
    event.preventDefault(); // evito que se recarge la página para poder mostrar los resultados
    let perimetro = parseFloat(2 * Math.PI * document.getElementById("radio").value)
    let area =parseFloat(2 * Math.PI * document.getElementById("radio").value ** 2)
    // Muestro en cada fila el area y el perímetro con 2 decimales con toFixed()
    document.getElementById("circ").innerText = perimetro.toFixed(2) + " cm";
    document.getElementById("area").innerText = area.toFixed(2) + " cm²";

    // quito el hidden para mostrar los resultados
    document.getElementById("resultados").hidden = false;

    // Mensaje de cálculo realizado con éxito
    document.getElementById("mensaje").innerText = "¡Cálculo realizado!";


}
