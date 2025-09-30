# UD02-PRC02: A linguaxe JS.
### Para cada un dos exercicios deberas crear un cartafol e nestes conterá ao menos un ficheiro script.js e un index.html. As túas tarefas terán un estructura como esta.

~~~~
├── ex01
│   ├── index.html
│   └── script.js
└── ex02
    ├── index.html
    └── script.js
~~~~

## Exercicio 1 - Estructuras de control

Facer un programa que pida a nota numérica dun alumno e a mostre nunha ventá emerxente en forma de texto (Sobresaínte, Notable, Ben, Suficiente, Insuficiente), empregando if-else if-else.

Os intervalos e as mensaxes a mostrar son o seguintes:

```
Intervalo de Nota	Mensaxe
9 e máis	    ¡¡Sobresaliente!!
7 a 8.99	    ¡Notable!
6 a 6.99	    Ben
5 a 5.99	    Suficiente ¬¬
Menos de 5	    Insuficiente 😞
```
## Ejercicio 2 - switch case

Adapta o exercicio anterior a estructura **switch**

## Exercicio 3 - vocais

Facer un programa que pida un texto ó usuario e o percorra para mostrar nunha ventá emerxente o mesmo texto sen as vocais, empregando os bucles while, do-while e for, e a sentencia continue. Para realizar este exercicio proporcionase os seguinte ficheiros:

index.html , coa interface do aplicativo.
script.js , coa estructura do programa.
Pasos para resolver esta tarefa:

Vincula o ficheiro index.html co script.js.
Completa as funcións seguintes:
eliminarVogaisWhile , elimina as vogais empregando o bucle while.
eliminarVogaisDoWhile , elimina as vogais empregando o bucle do ... while.
eliminarVogaisFor , elimina as vogais empregando o bucle for.
Recorda que só debes completar o código nas zonas que se mostra cun //TODO: Realizar polo alumno ....

O pseudocódigo para o algortimo debería ser algo semellante ao seguinte:

![Exerc 3 image](https://github.com/jsamperevazquez/JavaScript_ECLI/blob/main/www/media/exerc_3.png)

## Exercicio 4 - Bisiesto.

Implemente unha función chamada bisesto que determine se un ano é bisesto. Lembra que:

-  Un ano é bisesto se é divisible entre 4.
-  Non obstante, non é bisesto se é divisible entre 100, a menos que tamén sexa divisible entre 400.
-  A función debe recibir un número enteiro positivo correspondente ao ano e devolver true se o ano é bisesto e false en caso contrario.

## Exercicio 5 - Listado de anos bisiestos

Implementa a función para devolver un array co listado de anos bisiestos a partires da función implementada no exercio anterior. Emprega o código proporcionado para este exercicio. A función nova a implementar toma dous anos como entrada ( ano de inicio e ano de fin) e devolve un array con todos os anos bisiestos nese intervalo.
