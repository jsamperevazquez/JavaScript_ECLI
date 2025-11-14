document.getElementById('gardar').addEventListener('click', function() {
    nome = document.getElementById('nome').value;
    mensaxe = document.getElementById('mensaxe').value;
    localStorage.setItem('nome', nome);
    localStorage.setItem('mensaxe', mensaxe);
    document.getElementById('resultado').innerHTML = 'Nome: ' + nome + '<br>'+ 'Mensaxe: ' + mensaxe;
});