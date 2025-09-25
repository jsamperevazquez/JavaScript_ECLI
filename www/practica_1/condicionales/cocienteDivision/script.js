function cocienteDivision(num1, num2) {
    if (num2 == 0) {
        throw new Error("No se puede dividir entre 0")
    }
    else {
        return alert("El conciente de la división es " + num1 / num2)
    }
}
cocienteDivision(parseInt(prompt("Introduce un número")), parseInt(prompt("Introduce otro número")))