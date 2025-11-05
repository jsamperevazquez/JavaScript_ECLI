document.getElementById("executarNumeros").addEventListener("click",
    function () {
        // Obter o número introducido polo usuario
        let numero = parseFloat(document.getElementById("numero").value);
        // 1. Arredondamento do número (Math.round)
        function arredondarNumero(num) {
            return Math.round(num); 
        }
        // 2. Valor absoluto do número (Math.abs)
        function valorAbsoluto(num) {
            return Math.abs(num); 
        }
        // 3. Arredondamento cara abaixo (Math.floor)
        function arredondarAbaixo(num) {
            return Math.floor(num); 
        }
        // 4. Arredondamento cara arriba (Math.ceil)
        function arredondarArriba(num) {
            return null; 
        }
        // 5. Xeración dun número aleatorio entre 1 e 100
        function numeroAleatorio() {
            return Math.floor(Math.random() * (100 - 1 + 1)) + 1 ; 
        }
        // 6. Traballo con decimais (limitación a dous decimais)
        function decimaisDous(num) {
            return Math.round(num * 100) / 100; 
        }
        // Actualizar os resultados
        document.getElementById("resultado1").textContent = "1. Arredondamento do número: " + arredondarNumero(numero);
        document.getElementById("resultado2").textContent = "2. Valor absoluto do número: " + valorAbsoluto(numero);
        document.getElementById("resultado3").textContent = "3. Arredondamento cara abaixo: " + arredondarAbaixo(numero);
        document.getElementById("resultado4").textContent = "4. Arredondamento cara arriba: " + arredondarArriba(numero);
        document.getElementById("resultado5").textContent = "5. Número aleatorio entre 1 e 100: " + numeroAleatorio();
        document.getElementById("resultado6").textContent = "6. Número limitado a dous decimais: " + decimaisDous(numero);
    });