function avaliarNota() {
    var nota = parseFloat(document.getElementById("nota").value);
    var resultado = ""; //nesta variable gardaras o texto a mostrar  na páxina web.
    if (nota >= 0 && nota < 5){
        resultado = "Insuficiente 😟"
    }else if (nota <= 5 && nota < 6){
        resultado= "Suficiente ¬¬"
    }else if (nota >= 6 && nota < 7){
        resultado = "Ben"
    }else if (nota >= 7 && nota < 9){
        resultado = "¡Notable!"
    }else if (nota >= 9 && nota <=10){
        resultado = "¡¡Sobresaliente!!"
    }else{
        resultado = "Dato non válido 😲"
    }


    document.getElementById("resultado").innerText = resultado;
}