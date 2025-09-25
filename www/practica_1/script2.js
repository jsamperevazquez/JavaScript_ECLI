// Función que calcula o prezo total do artículo calculando o IVA do mesmo
const calcularPrezoIva = (prezo, iva) => {
    // Devolve a suma do prezo máis o imposto o que está suxeito
    return prezo * iva / 100 + prezo
}
// Chamamos a función pasándolle o prezo e o imposto
console.log('O prezo do total do producto é ' + calcularPrezoIva(100, 21))