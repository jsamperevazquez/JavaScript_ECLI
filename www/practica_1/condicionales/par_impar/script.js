const parImpar = (numero) => {
    if(numero % 2 == 0){
        alert(numero + " es par ")
    }
    else {
        alert(numero + " es impar")
    }
}
parImpar(parseInt(prompt("Introduce un número")))