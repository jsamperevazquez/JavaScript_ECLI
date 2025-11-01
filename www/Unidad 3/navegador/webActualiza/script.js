url = window.location.href;
document.getElementById("url").innerHTML = url;
setInterval(() => {
    window.location.reload();
    document.writeln(url);
}, 5000);