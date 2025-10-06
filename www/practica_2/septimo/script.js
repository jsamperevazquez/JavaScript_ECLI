function generarMatriz(n1, n2) {
    function aleatorio(min, max) {
        let numero = Math.floor(Math.random() * (max - min + 1) + min)
        return numero
    }

    let matriz = []
    for (let i = 0; i < n1; i++) {
        let fila = []
        for (let j = 0; j < n2; j++) {
            fila.push(Math.floor(aleatorio(10, 100)))
        }
        matriz.push(fila)
    }
    return matriz
}

function mostrarMatrizTabla() {
    let fila = 3
    let columna = 3
    let tabla = '<table>'
    const matriz = generarMatriz(fila, columna)
    for (let i = 0; i < fila; i++) {
        tabla += '<tr>'
        for (let j = 0; j < columna; j++) {
            tabla += `<td>${matriz[i][j]}</td>`
        }
        tabla += '</tr>'
    }
    tabla += '</table>'
    document.getElementById("resultado").innerHTML = tabla
}
