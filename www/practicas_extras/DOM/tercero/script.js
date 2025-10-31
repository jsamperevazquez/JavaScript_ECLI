//ejercicio 1
const miTitulo = document.querySelector('h1');
console.info(`Este es el valor del elemento: ${miTitulo.innerHTML}`);
miTitulo.innerHTML = 'Estoy agregando un nuevo texto';
console.log(document.querySelector('ul:nth-of-type(2)').innerHTML); //segundo elemento de tipo ul

//ejercicio 2
miTitulo.style.backgroundColor = 'yellow';
const subtitulos = document.querySelectorAll('h2');
subtitulos.forEach(function(subtitulo){ //Recorro el array que devuelve el querySelectorAll
    subtitulo.classList.add('subtitulos');  //Le añado la clase a cada h2
})
const estiloLetras = document.querySelectorAll('.estilo-letras');
estiloLetras.forEach(function(estiloLetra){
    estiloLetra.classList.remove('estilo-letras');
})