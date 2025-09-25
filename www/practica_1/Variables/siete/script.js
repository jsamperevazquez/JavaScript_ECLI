let numero = Number(prompt("Por favor ingresa un número de dos dígitos"))
while (numero >= 100 || numero < 10){
    alert("El número debe ser de 2 cifras ")
    numero = Number(prompt("Por favor ingresa un número de dos dígitos"))
}
alert(numero + " son " + parseInt(numero / 10) + " decenas y " + numero % 10 + " unidades")