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
