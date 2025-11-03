let texto = "Esto es un texto para realizar pruebas";

// coñecer a lonxitude do texto
console.log(texto.length);

let texto1 = "Ola";
let texto2 = "Mundo";

// Xuntamos dúas cadeas
console.log(texto1.concat(" "). concat(texto2));

// convertimos a maiúsculas e minúsculas
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// remplazamos caracteres
let proba = "JavaScript é complicado";
let proba2 = proba.replace(/complicado/, "sinxelo"); // Busco por expresión regular / /
console.log(proba2);

// Dividimos a cadea
let lista = "Manzá, Laranxa, Plátano, Pera";
let novaLista = lista.split(",");
console.log(novaLista);

// Quitamos os espazos en branco no principio e no final dunha cadea
let cadea = "  Ola Mundo";
console.log(cadea.trim());
