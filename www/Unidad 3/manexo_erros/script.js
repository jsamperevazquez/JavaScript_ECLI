function dividirNumeros(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre 0");
    } else {
        return a / b;
    }
}
try {

    console.log(dividirNumeros(10, 2));
    console.log(dividirNumeros(10, 0));

} catch (error) {
    console.log("❌ Erro detectado: " + error);
} finally {
    console.log("Operación terminada");
}

console.log("\n");

let validarIdade = (idade) => {
    if (idade < 18) {
        throw new Error("Menor de idade");
    } else {
        return true;
    }
}

try {
    console.log(validarIdade(17));

} catch (error) {
    console.log("❌ Erro detectado: " + error);
} finally {
    console.log("Validación terminada");
}

console.log("\n");

function calculasSalario(horasTraballadas, salarioPorHora) {
    try {
        if (horasTraballadas < 0 || salarioPorHora < 0) {
            throw new Error("Non pode ser un valor negativo");
        } else {
            return horasTraballadas * salarioPorHora;
        }
    } catch (error) {
        console.log("❌ Erro detectado: " + error);
    } finally {
        console.log("Calculo de salario finalizado");
    }
}


console.log(calculasSalario(40, 15));
console.log(calculasSalario(-5, 15));
