/**
 * Array con los objetos de navegador para renderizar
 */
const objectsNavigator = [{ id: "appName", valor: navigator.appName },
{ id: "appVersion", valor: navigator.appVersion },
{ id: "language", valor: navigator.language },
{ id: "platform", valor: navigator.platform }
];
for (let i = 0; i < objectsNavigator.length; i++) {
    document.getElementById(objectsNavigator[i]["id"]).innerHTML += objectsNavigator[i]["valor"];
};

/**
 * Array con los objetos de screen para renderizar
 */
const objectsScreen = [
    { id: "screenWidth", valor: window.screen.width },
    { id: "screenHeight", valor: window.screen.height },
];

for (let i = 0; i < objectsScreen.length; i++){
    document.getElementById(objectsScreen[i]["id"]).innerHTML += objectsScreen[i]["valor"];
};

/**
 * Función fletch para actualizar la página
 */
const actualizarPaxina = () => {
    location.reload();
}
/**
 * Función fletch para ir a Google
 */
const irAGoogle = () => {
    location.assign("https://www.google.com");
}
/**
 * Función fletch para ir atras en el historial
 */
const irAtras = () => {
    history.back();
}
/**
 * Función fletch para ir adelante en el historial
 */
const irAdiante = () => {
    history.forward();
}