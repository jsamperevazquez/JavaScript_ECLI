document.getElementById("executarOperacions").addEventListener("click",
    function () {
        // Obter os números introducidos polo usuario
        let numero1 = parseFloat(document.getElementById("numero1").value);
        let numero2 = parseFloat(document.getElementById("numero2").value);
        // 1. Potencia (numero1 elevado a numero2)
        function calcularPotencia(num1, num2) {
            return Math.pow(num1, num2);
        }
        // 2. Raíz cadrada do primeiro número
        function raizCadrada(num1) {
            return Math.sqrt(num1);
        }
        // 3. Máximo entre os dous números
        function valorMaximo(num1, num2) {
            return Math.max(num1, num2);
        }
        // 4. Mínimo entre os dous números
        function valorMinimo(num1, num2) {
            return Math.min(num1, num2);
        }
        // 5. Seno do primeiro número (en radians)
        function calcularSeno(num1) {
            return Math.sin(num1);
        }
        // 6. Coseno do segundo número (en radians)
        function calcularCoseno(num2) {
            return Math.cos(num2);
        }
        // 7. Exponencial de numero1
        function calcularExponencial(num1) {
            return Math.exp(num1);
        }
        // 8. Logaritmo natural de numero1
        function calcularLogaritmoNatural(num1) {
            return Math.log(num1);
        }
        // 9. Cálculo da hipotenusa
        function calcularHipotenusa(num1, num2) {
            return Math.hypot(num1, num2);
        }
        // 10. Truncado de número
        function truncarNumero(num1) {
            return Math.trunc(num1);
        }
        // Actualizar os resultados
        document.getElementById("resultado1").textContent = `1. ${numero1} elevado a ${numero2}: ` + calcularPotencia(numero1, numero2);
        document.getElementById("resultado2").textContent = `2. Raíz cadrada de ${numero1}: ` + raizCadrada(numero1);
        document.getElementById("resultado3").textContent = `3. Máximo entre ${numero1} e ${numero2}: ` + valorMaximo(numero1, numero2);
        document.getElementById("resultado4").textContent = `4. Mínimo entre ${numero1} e ${numero2}: ` + valorMinimo(numero1, numero2);
        document.getElementById("resultado5").textContent = `5. Seno de ${numero1} (en radianos): ` + calcularSeno(numero1).toFixed(4);
        document.getElementById("resultado6").textContent = `6. Coseno de ${numero2} (en radianos): ` + calcularCoseno(numero2).toFixed(4);
        document.getElementById("resultado7").textContent = `7. Exponencial de ${numero1}: ` + calcularExponencial(numero1).toFixed(4);
        document.getElementById("resultado8").textContent = `8. Logaritmo natural de ${numero1}: ` + calcularLogaritmoNatural(numero1).toFixed(4);
        document.getElementById("resultado9").textContent = `9. Hipotenusa de ${numero1} e ${numero2}: ` + calcularHipotenusa(numero1, numero2).toFixed(4);
        document.getElementById("resultado10").textContent = `10. Truncado de ${numero1}: ` + truncarNumero(numero1);
    });