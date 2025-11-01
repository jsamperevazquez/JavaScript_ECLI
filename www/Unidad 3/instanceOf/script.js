let number = new Number(5.5);
let texto = new String("Hola esto es un string");
let booleano = new Boolean(false);
let nulo = null; // Typeof() devolve object devido a un erro que non foi correxido para manter a compatibilidade con navegadores anteriores
let indefinido = undefined;
let simbolo = Symbol();
let data = new Date(); 

console.log(number instanceof Number);
console.log(texto instanceof String);
console.log(booleano instanceof Boolean);
console.log(indefinido instanceof Object);
console.log(simbolo instanceof Symbol);
console.log(data instanceof Date);
console.log(nulo instanceof Object);

