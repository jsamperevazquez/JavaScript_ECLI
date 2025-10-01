/**
 * Función para recoller os valores dos inputs do html e os lanza a calcularMCM
 */
function leerValores() {
    let a = parseInt(document.getElementById("num1").value)
    let b = parseInt(document.getElementById("num2").value)
    calcularMCM(a, b)
}

/**
 * Función que calculará o mínimo común múltiplo dos números enteiros enviados dende a función de lectura
 * @param {number} a primer número 
 * @param {number} b segundo número
 */
function calcularMCM(a, b) {
    let maior = (a > b) ? a : b // Ternario para obter o maior número dos dous
    let menor = (a < b) ? a : b // Ternario para obter o menor número de ambos
    let mcm = maior
    while (mcm % menor != 0) {
        mcm += maior
    }
    buscarMultiplosComunes(mcm, 50000, 55000)
}

/**
 * Función para obter un array  cos múltiplos de un rango do M.C.M obtido dos número da función calcularMCM
 * @param {number} mcm O MCM obtido de dous número pasados a función calcularMCM
 * @param {number} inicio O inicio do rango de números 
 * @param {number} fin O fin do rango de números
 * @returns {[]number} Array cos multiplos do MCM dende o inicio o fin
 */
function buscarMultiplosComunes(mcm, inicio, fin) {
    let resultado = [];
    for (inicio; inicio <= fin; inicio++) {
        if (inicio % mcm == 0) {
            resultado.push(inicio)
        }
    }
    document.getElementById("resultado").innerText = resultado
    return resultado;
}