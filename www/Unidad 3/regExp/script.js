/*
Escribe unha expresión regular para verificar se unha cadea contén exactamente tres díxitos. Utiliza
o método test() para validar as seguintes cadeas: '123', '1234', e '12'.
*/

const pattern = /^\d{3}$/; // desde el inicio de la cadena ^ al final de la cadeba $ para que sean exactamente 3 digitos.
const cadea1 = '123';
const cadea2 = '12';
const cadea3 = '1';

console.log(pattern.test(cadea1));
console.log(pattern.test(cadea2));
console.log(pattern.test(cadea3));

/* 
 Crea unha expresión regular para validar números de teléfono no formato 123-456-7890. Proba a
expresión coas seguintes cadeas: '123-456-7890', '1234567890', '123-45-7890'.
*/

const pattern2 = /^\d{3}-\d{3}-\d{4}$/;
const cadea4 = '123-456-7890';
const cadea5 = '1234567890';
const cadea6 = '123-45-7890';

console.log(pattern2.test(cadea4));
console.log(pattern2.test(cadea5));
console.log(pattern2.test(cadea6));

/*
Crea unha expresión regular que valide cores en formato hexadecimal (# seguido de 3 ou 6 díxitos
hexadecimais). Proba as seguintes cadeas:
1. '#FFF' → verdadeiro
2. '#FFFFFF' → verdadeiro
3. '#FFFF' → falso
*/
const pattern3 = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
console.log(pattern3.test('#FFF'));
console.log(pattern3.test('#FFFFFF'));
console.log(pattern3.test('#FFFF'));

/*
Crea unha expresión regular que substitúa todos os espazos en branco dunha cadea por guións (-).
Proba coa seguinte cadea: var texto = "Esta é unha cadea de exemplo.";
*/
var texto = "Esta é unha cadea de exemplo.";
let textoSenEspazos = texto.replace(/\s/g, '-');
console.log(textoSenEspazos);

/* 
Crea unha expresión regular que valide códigos postais en formato 12345 ou 12345-6789. Proba as
seguintes cadeas:
1. '12345' → verdadeiro
2. '12345-6789' → verdadeiro
3. '1234' → falso
*/
const patternPostal = /^([0-9]{5}|[0-9]{5}-[0-9]{4})$/;
console.log(patternPostal.test('12345'));
console.log(patternPostal.test('12345-6789'));
console.log(patternPostal.test('1234'));

