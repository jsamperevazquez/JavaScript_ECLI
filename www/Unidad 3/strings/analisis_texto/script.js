document.getElementById("analisarTexto").addEventListener("click",
function() {

// Obter o texto introducido polo usuario
let texto = document.getElementById("texto").value;


// 1. Contar palabras no texto
function contarPalabras(texto) {
    let textoTrim = texto.trim();
    let textoArray = textoTrim.split("");
    return textoArray.length;
}

// 2. Atopar a palabra máis longa
function palabraMaisLonga(texto) {
    let palabraLonga = "";
    let textoTrim = texto.trim();
    let textoArray = textoTrim.split(" ");
    textoArray.forEach(element => {
        palabraLonga = (element.length > palabraLonga.length) ? element : palabraLonga;
    });
    return palabraLonga;
}

// 3. Inverter o texto
function inverterTexto(texto) {
    let textoSeparado = texto.split("");
    return textoSeparado.reverse();
}

// 4. Eliminar vogais do texto
function eliminarVogais(texto) {
    let senVogas = texto.replace(/[aeiou]/gi, "");
    return senVogas;
}

// Actualizar o contido dos parágrafos coa análise do texto
document.getElementById("contarPalabras").textContent = "Número de palabras: " + contarPalabras(texto);
document.getElementById("palabraMaisLonga").textContent = "Palabra máis longa: " + palabraMaisLonga(texto);
document.getElementById("textoInvertido").textContent = "Texto invertido: " + inverterTexto(texto);
document.getElementById("eliminarVogais").textContent = "Texto sen vogais: " + eliminarVogais(texto);
});


