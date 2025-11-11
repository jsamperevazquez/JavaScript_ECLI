// 1-  Crea unha función chamada converterCelsiusAFahrenheit que reciba un valor en graos Celsius e devolva o seu equivalente en Fahrenheit. Usa a fórmula: F = C * 9/5 + 32 .

const gradosCelsius = 28;
// Con function
function converterCelsiusAFahrenheit(gradosCels){
    return gradosCels * 9/5 +32;
}

// Anónima
let farenAnonima = function(c){
    return c* 9/5 +32;
}
// Función frecha
let farenFrecha = (c) =>{
    return c * 9/5 +32;
}
// Con Constructor Funcion
let farenConstructor = new Function('c', 'return c * 9/5 +32;');


console.log(`${gradosCelsius} ºC son ${converterCelsiusAFahrenheit(gradosCelsius)} F`);
console.log(`${gradosCelsius} ºC son ${farenAnonima(gradosCelsius)} F`);
console.log(`${gradosCelsius} ºC son ${farenFrecha(gradosCelsius)} F`);
console.log(`${gradosCelsius} ºC son ${farenConstructor(gradosCelsius)} F`);

/*Calcule o perímetro dun rectángulo e asígnaa a unha variable chamada calcularPerimetroRectangulo.
 A función debe recibir a base e a altura como parámetros e devolver o perímetro (usa a fórmula
Perímetro = 2 * (base + altura)).*/
const base = 10;
const altura = 5;

// Con function
function calcularPerimetroRectangulo(base, altura){
    return 2 * (base + altura);
}
// Con anónima
let calcularPerim = function(b, a){
    return 2 * (base + altura);
}
// Con frecha 
let calcularPerimFrecha = (b, a) =>{
    return 2 * (base + altura);
}
// Con Constructor
let calcularPerimConst = new Function('b', 'a', 'return 2 * (b + a)')
console.log("El perímetro del rectángulo es: " + calcularPerimetroRectangulo(base, altura));
console.log("El perímetro del rectángulo es: " + calcularPerim(base, altura));
console.log("El perímetro del rectángulo es: " + calcularPerimFrecha(base, altura));
console.log("El perímetro del rectángulo es: " + calcularPerimConst(base, altura));


/* 
 Crea unha función Frecha chamada calcularVolumenCubo que reciba a lonxitude do lado dun cubo e
devolva o seu volume. A fórmula é: Volume = lado³.
*/
const lonxitudeCms = 7;
let calcularVolumenCubo = (lonxitude)=>{
    return Math.pow(lonxitude, 3);
}
console.log("El volumen del cubo es: " + calcularVolumenCubo(lonxitudeCms) + ' cm^3');

/*
Crea unha función chamada calcularHipotenusa que reciba dous números (os catetos dun triángulo
rectángulo) e devolva a hipotenusa usando a fórmula: hipotenusa = √(cateto1² + cateto2²).
*/
const cateto1 = 4;
const cateto2 = 3;

// Con function 
function calcularHipotenusa(c1, c2){
    return Math.sqrt(c1**2 + c2**2);
}

// Con anonima
const calcularHip = function(c1, c2){
    return Math.sqrt(c1**2 + c2**2);
}
// Con frecha
const calcularHipFrecha = (c1, c2)=>{
    return Math.sqrt(c1**2 + c2**2);
}
// Con Constructor 
let calcularHipConst = new Function('c1', 'c2', 'return Math.sqrt(c1**2 + c2**2)');

console.log("La hipotenusa del triángulo es: " + calcularHipotenusa(cateto1, cateto2));
console.log("La hipotenusa del triángulo es: " + calcularHip(cateto1, cateto2));
console.log("La hipotenusa del triángulo es: " + calcularHipFrecha(cateto1, cateto2));
console.log("La hipotenusa del triángulo es: " + calcularHipConst(cateto1, cateto2));




