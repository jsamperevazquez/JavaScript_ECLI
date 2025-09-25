bebida = prompt("Elija su bebida por favor [Agua, Refresco, Vino o Cerveza]")
function elegirBebida(bebida) {
    switch(bebida.toLowerCase()){
        case 'agua':
        case 'refresco':
            return alert("Diríjase a la tienda!!!")
        case 'vino':
        case 'cerveza':
            return alert("Diríjase a la barra!!!")
        default:
            alert("Elige una bebida de las disponibles")
            return elegirBebida(prompt("Elija su bebida por favor [Agua, Refresco, Vino o Cerveza]"))
    }
}
elegirBebida(bebida)