let varUno = 10
let varDos = 30

console.log("varUno es " + varUno);   // 10
console.log("varDos es " + varDos);   // 30
let aux;
aux = varUno;
varUno = varDos;
varDos = aux;
console.log("varUno es " + varUno);    // 30
console.log("varDos es " + varDos);    // 10
