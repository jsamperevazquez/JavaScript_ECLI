function sumaNumeros(num1, num2) {
    if (typeof (num1) != 'number' || typeof (num2) != 'number') {
        console.log("El número tiene que ser válido");
    } else {
        console.log(num1 + num2);
    }
}
sumaNumeros(3, 2);

/**
Ensalada de frutas
Declara un array llamado ensaladaDeFrutas.
Usa un bucle For y muestra cada ítem 
de ensaladaDeFrutas en la consola, con el siguiente mensaje: “Las frutas que hay en la ensalada son:”
 */

let ensaladaDeFrutas = ['manzana', 'banana', 'naranja', 'kiwi', 'fresa'];

for (let i = 0; i < ensaladaDeFrutas.length; i++) {
    console.log("Las frutas que hay en la ensalada son: " + ensaladaDeFrutas[i]);

}
/**
Encontrar el índice de un elemento del Array
Crea un array que se llame toDoList con al menos 5 tareas para hacer.
A través del método indexOf() encontrar el indice de una de las 5 tareas especificadas en el array.
Borrar el item del array toDoList, que ha sido devuelto por el método indexOf().
 */

let toDoList = ['lavar los platos', 'hacer la cama', 'estudiar JavaScript', 'ir al supermercado', 'sacar al perro'];
console.log(toDoList);
let indiceLista = toDoList.indexOf('estudiar JavaScript');
if (indiceLista !== -1) {
    toDoList.splice(indiceLista, 1);
}
console.log(toDoList);

/*
Promedio de edad

Crear un array edades con al menos 8 edades distintas.
Recorrer el array y obtener el promedio de las edades del array.
*/
let edades = [25, 30, 22, 28, 35, 40, 27, 32];
let sumaEdades = 0;
for (let i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
}
console.log("El promedio de las edades es: " + sumaEdades / edades.length);

/*

Armando una lista de super

Crea un array vacio que se llame listaDeSuper.
Piensa como le puedes pedir al usuario para que ingrese al menos 5 productos para llenar la lista de super.
Muestra por la consola los productos introducidos por el usuario.


 let listaDeSuper = new Array();
 for (let i = 0; i < 5; i++) {
    let producto = prompt("Ingrese un producto para las lista del super: \n");
    listaDeSuper.push(producto);
 }
 alert("Los productos en la lista del super son: \n" + listaDeSuper);
*/

/*
Obteniendo el nombre más largo de un array

Declara un array nombres con al menos 6 nombres.
Obtén el nombre más largo del array nombres. 
Tener en cuenta que los "Strings" son listas de caracteres y que las listas tienen un largo (length) que indica su tamaño.
*/

let nombres = ['Ana', 'Bernardo', 'Cecilia', 'Domingo', 'Ezequiel', 'Fernanda'];
let nombreMasLargo = "";

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}
console.log("El nombre más largo es: " + nombreMasLargo + " con " + nombreMasLargo.length + " caracteres.");

/*
Calculando el mayor

Declara una función que se llama calculoMayor() y pasale como parámetros (num1,num2)
Dentro de la función muestra una alerta que diga cuál de los números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de una alerta también.
Invoca la función y llena los argumentos con los números que desees.

*/
let calculoMayor = function (num1, num2) {
    str = "El mayor es: ";
    return alert((num1 > num2) ? str + num1 : (num1 === num2) ? "Iguales" : str + num2);
};
calculoMayor(5, 5);


// Función flecha para calcular averiguar el mayor de los dos números
let mayorNumeros = (num1, num2) => {
    let mensaje = "El mayor es: ";
    return alert((num1 > num2) ? mensaje + num1 : (num1 === num2) ? "Iguales" : mensaje + num2);
};

mayorNumeros(10, 20);