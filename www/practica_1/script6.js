// Código refactorizado
const USUARIO = "Manuel García"
const PREZOPRODUCTO = 200
var cantidade = 3
// O desconto vai en función da cantidade comprada que sempre parte se é maior a 5 e mellora cando pasa de 10
let desconto = (cantidade > 10) ? 20 : (cantidade > 5 ? 10 : 0) 
const PREZOFINAL = PREZOPRODUCTO * cantidade - (PREZOPRODUCTO * cantidade) * desconto / 100 // Prezo final do producto co desconto

console.log("O usuario " + USUARIO + " debe pagar " + PREZOFINAL + " euros.")