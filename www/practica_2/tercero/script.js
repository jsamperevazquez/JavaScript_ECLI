// Eliminamos a vocais cun bucle while
function eliminarVocaisWhile() {
    let texto = document.getElementById("texto").value // Valor que se recolle do input a tratar
    let textoSenVogais = ""
    let i = 0
    // Imos recorrendo o texto recollido no input
    while (i < texto.length) {
        caracter = texto[i]
        if (/[^aeiou]/i.test(caracter)) { // Se o caracter recollido non é una vocal -> /[^aeiou]/i <-
            textoSenVogais += caracter
        }
        i++
    }
    document.getElementById("resultado").innerText = textoSenVogais; // Renderizamos o resultado.
}

// Eliminamos a vocais cun bucle DoWhille
function eliminarVocaisDoWhile() {
    let texto = document.getElementById("texto").value // Valor que se recolle do input a tratar
    let textoSenVogais = ""
    let i = 0
    do {
        caracter = texto[i]
        if (/[^aeiou]/i.test(caracter)) { // Se o caracter recollido non é una vocal -> /[^aeiou]/i <-
            textoSenVogais += caracter
        }
        i++
    }
    while (i < texto.length)
    document.getElementById("resultado").innerText = textoSenVogais; // Renderizamos o resultado.
}

// Eliminamos as vocais cun bucle for
function eliminarVocaisFor() {
    let texto = document.getElementById("texto").value // Valor que se recolle do input a tratar
    let textoSenVogais = ""
    for (let i = 0; i < texto.length; i ++){
        caracter = texto[i]
        if (/[^aeiou]/i.test(caracter)) { // Se o caracter recollido non é una vocal -> /[^aeiou]/i <-
            textoSenVogais += caracter
        }
    }
    document.getElementById("resultado").innerText = textoSenVogais; // Renderizamos o resultado.
}