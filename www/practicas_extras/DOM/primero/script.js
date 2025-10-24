function tirarDados(){
    let numeroDado = Math.floor(Math.random() * 6) +1;
    document.getElementById("resultado").innerHTML = "Has sacado un " + numeroDado;
}