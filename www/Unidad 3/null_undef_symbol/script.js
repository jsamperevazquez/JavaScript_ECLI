// Define a variable con null
console.log(" ----- CON NULL----- ");
var variableConNull = null;
// Verifica o tipo de variableConNull
console.log(typeof variableConNull); // Cal é o resultado esperado?
// Comproba igualdade estrita
console.log(variableConNull === null); // true ou false?
// Comproba igualdade non estrita
console.log(variableConNull == undefined); // true ou false?
// Tentando acceder a unha propiedade dun valor null
try {
    console.log(variableConNull.algo); // Que sucede aquí?
} catch (e) {
    console.log("variableConNull causa un error ao acceder a unha propiedade");
}


// Define unha variable sen asignarlle ningún valor
console.log(" ----- CON UNDEFINED ----- ");
var variableSinAsignar;
// Verifica o tipo de variableSinAsignar
console.log(typeof variableSinAsignar); // Cal é o resultado esperado?
// Comproba igualdade estrita
console.log(variableSinAsignar === undefined); // true ou false?
// Comproba igualdade non estrita
console.log(variableSinAsignar == null); // true ou false?
// Tentando acceder a unha propiedade dun valor undefined
try{
    console.log(variableSinAsignar.algo)
}catch (e){
    console.log("VariableSinAsignar causa un erro ao acceder a unha propiedade: " +  e);
}


// Define dous símbolos
console.log(" ----- CON SYMBOL ----- ");
let symbol1 = Symbol("probas");
let symbol2 = Symbol("probas");
// Compara os símbolos
console.log(symbol1 === symbol2); // Que resultado esperas?
// Crea un símbolo e un obxecto
let mySymbol = Symbol();
let objetoConSymbol = {
[mySymbol]: "valor"
};
// Accede á propiedade usando o símbolo como clave
console.log(objetoConSymbol[mySymbol]); // Cal é o resultado esperado?

// Tenta iterar sobre as propiedades do obxecto
for (let key in objetoConSymbol) {
    console.log(key); // Que pensas que vai aparecer?
}
// Usa Object.keys() para listar as propiedades
console.log(Object.keys(objetoConSymbol)); // Que devolve isto?