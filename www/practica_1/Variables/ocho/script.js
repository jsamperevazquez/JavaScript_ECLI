const patataPersona = 200
const huevosKiloPatata = 5
const cebollaKiloPatata = 300
let numeroPersonas = parseInt(prompt("Cuantos comensales?"))
alert("Para " + numeroPersonas + " necestias:\n " + patataPersona * numeroPersonas / 1000 + "  kg de patatas\n" + 
    patataPersona * numeroPersonas / 1000 * huevosKiloPatata + " huevos\n" +
    patataPersona * numeroPersonas / 1000 * cebollaKiloPatata + " gramos de cebolla"
)
