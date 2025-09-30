const bisiesto = (ano) =>((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) // Devolve true soamente se cumpre
        
console.log(bisiesto(2020))
console.log(bisiesto(1900))
console.log(bisiesto(2000))

