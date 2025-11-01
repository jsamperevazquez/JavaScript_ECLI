let number = 5.5;
let texto = "Esto é un texto";
let booleano = true;
let nulo = null;
let indefinido = undefined;
let simbolo = Symbol();
let data = new Date(); //Esto devolve un obxecto porque o constructor crea un obxecto.

const arrayItems = [number, texto, booleano, nulo, indefinido, simbolo, data];

arrayItems.forEach(element => {
    console.log(typeof(element))
});



