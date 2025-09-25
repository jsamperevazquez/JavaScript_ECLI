let tresNumeros = new Array()
for (let i = 0; i < 3; i ++){
    tresNumeros[i] = Number(prompt("Introduce un número"))
}
let media = tresNumeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0) / tresNumeros.length
alert("La media de los numeros " + tresNumeros + " es " + media)

