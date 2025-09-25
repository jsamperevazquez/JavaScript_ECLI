letra = prompt("Una letra [A, B, C, D]")
function switchCase(letter) {
    switch(letter.toLowerCase()){
        case 'a':
            return alert("Correcto!!!")
        case 'b':
            return alert("Has fallado")
        case "c":
            return alert("Has fallado")
        case "d":
            return alert("Has fallado")
        default:
            alert("Elige una letra válida")
            return switchCase(prompt("Una letra [A, B, C, D]"))
    }
}
switchCase(letra)