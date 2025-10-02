## Menor de idade

Desenvolve o JavaScript incrustado no HTML dado que solicite a idade do usuario e, con base nesa idade,
amose a mensaxe 'Eres maior de idade' se é igual ou superior a 18 anos, e 'Eres menor de idade' en caso
contrario.
![html code](https://github.com/jsamperevazquez/JavaScript_ECLI/blob/main/www/media/menorIdade.png)


## Video Xogo

Un videoxogo de coches calcula os puntos da túa carreira da seguinte maneira:puntos = (100 - número de
saídas de pista) / número de golpes con outros vehículos * número de adiantamentos.
Terás que crear un programa que solicite cos promt as diferentes variables da fórmula. Logo definirás a
variable puntos como unha combinación das outras variables. Finalmente, mostrarás na páxina todas as
variables e os puntos acadados polo xogador. Para realizar esta tarefa parte do seguinte código.

~~~~
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <script>
            function preguntaNumero( pregunta ){
            while (true){
            var valor = prompt(pregunta);
            if (!isNaN(valor) && valor!='') { return parseInt(valor); 
                    }
                }
            }   
            function principal(){
            //TODO: Código a realizar.
                alert (puntos);
                }

                principal();
        </script>
    </body>
</html>

~~~~

## Exercicio área perímetro

Solicita ao usuario o radio dunha circunferencia, deberás amosar na web a superficie da circunferencia e o
perímetro.

## Celsius vs Kelvin

Crea unha calculadora que converta os graos Celsius en graos Kelvin. Para facer esta conversión,
simplemente suma 273,15 aos graos Celsius. Na páxina web, mostrarás primeiro o contido da variable en
graos Celsius e, a continuación, o resultado en graos Kelvin


## Bisiesto

Exercicio e : bisiesto
Escribe un programa que determine se un ano é bisiesto, necesitas solicitar ao usuario que introduza un
ano e logo comprobar se cumpre certas condicións que o definan como bisiesto. Un ano considérase
bisiesto se cumpre as seguintes regras:
- Debe ser múltiplo de 4. Isto significa que o ano debe poder dividirse por 4 sen deixar residuo.
- Non debe ser múltiplo de 100, agás que tamén sexa múltiplo de 400.

~~~~

<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Determinar Ano Bisiesto</title>
</head>
<body>
    <h1>Comprobar se un ano é bisiesto</h1>
    <label for="yearInput">Introduce un ano:</label>
    <input type="number" id="yearInput" placeholder="Exemplo: 2024">
    <button onclick="bisiesto()">Comprobar</button>
    <p id="result"></p>
    <script>
        function bisiesto() {
            //TODO; tes que realizar esta función
            }
    </script>
</body>
</html>

~~~~
