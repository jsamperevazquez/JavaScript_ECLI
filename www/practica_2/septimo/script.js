function generarMatriz(n1, n2){
    function aleatorio(min, max){
        let numero = Math.floor(Math.random() * (max - min + 1) + min)
        return numero
    }
    
    let matriz = []
    for (let i=0; i < n1; i++ ){
        let fila = []
        for (let j= 0; j < n2; j++){
            fila.push(Math.floor(aleatorio(10, 100)))
        }
        matriz.push(fila)
    }
    return matriz
}

function mostrarMatrizTabla(){
    // TODO
}

console.log(generarMatriz(2, 2))