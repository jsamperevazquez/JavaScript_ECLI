/**
 * Funcion que xera unha matriz aleatoria coas dimensións que se lle pasa por parámetros
 * @param {number} n1 Filas da matriz
 * @param {number} n2 Columnas da matriz
 * @returns {[number]} Matriz numérica aleatoria
 */
function generarMatriz(n1, n2) {
    /**
     * Función que xera números aleatorios
     * @param {number} min O número para o rango mínimo desexado
     * @param {number} max O número para o rango máximo desexado
     * @returns {number} O número aleatorio creado
     */
    function aleatorio(min, max) {
        let numero = Math.floor(Math.random() * (max - min + 1) + min) //xera número aleatorio entre rangos
        return numero
    }

    let matriz = []
    for (let i = 0; i < n1; i++) {
        let fila = []
        for (let j = 0; j < n2; j++) {
            fila.push(Math.floor(aleatorio(10, 100))) // Va ingresando na fila o número xerado na función
        }
        matriz.push(fila) // Ingresa a fila na matriz
    }
    return matriz
}
/**
 * Función para xerar una matriz resultante da suma de duas matrices recibidas por parámetroa
 * @param {[number]} m1 Matriz aleatoria 
 * @param {[number]} m2  Matriz aleatoria
 * @returns {[number]} Matriz suma da m1 + m2
 */
function sumMatrix(m1, m2) {
    let sumaMatrix = []
    if (m1.length != m2.length || m1[0].length != m2[0].length){
        throw new Error(alert("Non se puede sumar matrices de diferente dimensión")) //Control de mesmas dimensións de matrices
    }
    for (let i = 0; i < m1.length; i++) {
        let fila = []
        for (let j = 0; j < m1.length; j++) {
            fila.push(m1[i][j] + m2[i][j])
        }
        sumaMatrix.push(fila)
    }
    return sumaMatrix
}
/**
 * Función que renderiza o resultado da matriz suma no DOM html
 */
function mostrarMatrizTabla() {
    let fila = 3 // Número de filas que queremos na matriz 
    let columna = 2 // Número de columnas que queremos na matriz
    // let fila_2 = 3 // Si desexamos comprobar o control de dimensións
    // let columna_2 = 3;
    let tablaSuma = '<table>' // Creo a etiqueta HTML da tabla
    let tablaMatriz_1 = '<table>'
    let tablaMatriz_2 = '<table>'
    const MATRIZ_1 = generarMatriz(fila, columna)
    const MATRIZ_2 = generarMatriz(fila, columna)
    const MATRIZ_SUM = sumMatrix(MATRIZ_1, MATRIZ_2)
  
    for (let i = 0; i < fila; i++) {
        tablaMatriz_1 += '<tr>',tablaMatriz_2 += '<tr>', tablaSuma += '<tr>' 
        
        for (let j = 0; j < columna; j++) {
            tablaMatriz_1 += `<td>${MATRIZ_1[i][j]}</td>` // Interpolación para crear os valores das columnas
            tablaMatriz_2 += `<td>${MATRIZ_2[i][j]}</td>` 
            tablaSuma += `<td>${MATRIZ_SUM[i][j]}</td>` 
        }
        tablaMatriz_1 += '</tr>', tablaMatriz_2 += '</tr>', tablaSuma += '</tr>'
        
    }
    tablaMatriz_1 += '</table>', tablaMatriz_2 += '</table>', tablaSuma += '</table>'
    
    
        document.getElementById("matrices").innerHTML = `
  <div style="display: flex; align-items: center; gap: 20px; justify-content: center;">
    ${tablaMatriz_1}
    <div style="font-size: 24px; font-weight: bold;">+</div>
    ${tablaMatriz_2}
    <div style="font-size: 24px; font-weight: bold;">=</div>
    ${tablaSuma}
  </div>
`
}
