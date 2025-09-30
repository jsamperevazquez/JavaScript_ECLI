import { bisiesto } from "../cuarto/script.js";

/**
 * Función que analiza un rango de anos na búsqueda de cales de estes son bisiestos
 * @param {number} anoInicio - ano no que se comenza a analizar 
 * @param {number} anoFin - ano no que se pone fin o analise 
 * @returns {number[]} retorna un array cos anos bisiestos 
 */
function obterAnosBisestos(anoInicio, anoFin) {
    /** @type {number[]} */
    let anosBisestos = []
    while (anoInicio <= anoFin) {
        if (bisiesto(anoInicio)) { // Función exportada que devolve true or false se o ano é bisiesto
            anosBisestos.push(anoInicio)
        }
        anoInicio++
    }
    return anosBisestos;
}
export default { bisiesto }

console.log(obterAnosBisestos(1950, 2020))
