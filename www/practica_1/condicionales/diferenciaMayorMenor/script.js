let num1= parseInt(prompt("Introduce un número")) , num2 = parseInt(prompt("Introduce otro número número"))

function diferenciaMayorMenor(n1, n2) {
    return n1 >= n2  ? alert(n1 - n2) : alert(n2 - n1)
}
diferenciaMayorMenor(num1, num2)