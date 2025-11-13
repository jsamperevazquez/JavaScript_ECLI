let cores = ['vermello', 'verde', 'azul'];
// Engado o cor amarelo o final do array
cores.push('amarelo');
// Elimino o primer cor do array
cores.shift();
// Recorro o array
cores.forEach(cor =>{
    console.log(cor);
})

let numeros = [1, 2, 3, 4, 5];
// Borro o índice 2 e lle digo que so borre un número a partires do indice indicado e añado nese índice o 6 e 7
numeros.splice(2, 1, 6, 7);
// Concateno outro array
let numerosConcat = numeros.concat([8, 9, 10]);
numerosConcat.forEach(n => console.log(n));

// Creo una matriz
let matriz = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];
// Engado outra fila o final
matriz.push([10, 11, 12]);

// Imprimo cada número
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
// Creo o obxecto persoa
let persoa = {
    'Nome': 'Alex',
    'Idade': 20,
    'Cidade': 'Vigo'
}
// Engado a profesión
persoa.profesion = 'Estudiante';
// Imprimo a clave e o valor do obxecto
for (let clave in persoa) {
    console.log(clave + " : " + persoa[clave]);
}
// Creo un map
let persoas = new Map;
persoas.set("Alex", 45);
persoas.set("Pedro", 34);
persoas.set("Maria", 23);

// Imprimo a idade de calquera
console.log("A idade de Maria: " + persoas.get("Maria"));
//Borro un membro
persoas.delete("Alex");

// Recorro o map
for (let [clave, valor] of persoas) {
    console.log(clave + " : " + valor);
}