const SALTO = "<br>"
const APPCODENAME = navigator.appCodeName;
const OFICIALNAME = navigator.appName;
const APPVERSION = navigator.appVersion;
const IDIOM = navigator.language;
const PLATFORM = navigator.platform;
const USERAGENT = navigator.userAgent;
document.getElementById('resultado').innerHTML = "Navegador <b>appCodeName: </b>" + APPCODENAME + SALTO;
document.getElementById("resultado").innerHTML += "Navegador <b>appName: </b>" + OFICIALNAME + SALTO;
document.getElementById("resultado").innerHTML += "Navegador <b>appVersion: </b>" + APPVERSION + SALTO;
document.getElementById("resultado").innerHTML += "Navegador <b>language: </b>" + IDIOM + SALTO;
document.getElementById("resultado").innerHTML += "Navegador <b>platform: </b>" + PLATFORM + SALTO;
document.getElementById("resultado").innerHTML += "Navegador e sistema <b>Navigator userAgent: </b>" + USERAGENT + SALTO;




