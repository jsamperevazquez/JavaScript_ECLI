document.getElementById('gardar').addEventListener('click', function() {
    nome = document.getElementById('nome').value;
    mensaxe = document.getElementById('mensaxe').value;
    sessionStorage.setItem('nome', nome);
    sessionStorage.setItem('mensaxe', mensaxe);
    document.getElementById('resultado').innerHTML = 'Nome: ' + nome + '<br>'+ 'Mensaxe: ' + mensaxe;
});