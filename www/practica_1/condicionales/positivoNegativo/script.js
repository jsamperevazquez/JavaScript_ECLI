const positivoNegativo = (numero) => {
    if(numero >= 0){
        alert(numero + " es positivo ")
    }
    else {
        alert(numero + " es negativo")
    }
}
positivoNegativo(parseInt(prompt("Introduce un número")))