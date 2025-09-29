function avaliarNota() {
    var nota = parseFloat(document.getElementById("nota").value);
    var resultado = "" //nesta variable gardaras o texto a mostrar  na páxina web.
    switch (true) {
        case nota >= 0 && nota < 5:
            resultado = "Insuficiente 😟"
            break
        case nota >= 5 && nota < 6:
            resultado = "Suficiente ¬¬"
            break
        case nota >= 6 && nota < 7:
            resultado = "Ben"
            break
        case nota >= 7 && nota < 9:
            resultado = "¡Notable!"
            break
        case nota >= 9 && nota <= 10:
            resultado = "¡¡Sobresaliente!!"
            break
        default:
            resultado = "Dato non válido 😲"
    }

    document.getElementById("resultado").innerText = resultado;
}