let secondsLeft = 300; //Segundos (5 minutos) para la cuenta regresiva 

const countDownEl = document.getElementById('countDown'); // Elemento donde se mostrará la cuenta regresiva

/**
 * Función para actualizar la cuenta regresiva cada segundo
 */
function updateCountDown() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60; // Se obtienen los segundos al usar el operador módulo entre 60

    countDownEl.innerHTML = ` 
        <div class="p-2 bd-highlight">
            <h1>${String(minutes).padStart(2, '0')}</h1>
            <p>Minutos</p>
        </div>
        <div class="p-2 bd-highlight">
            <h1>:</h1>
        </div>
        <div class="p-2 bd-highlight">
            <h1>${String(seconds).padStart(2, '0')}</h1>
            <p>Segundos</p>
        </div>
    `;
    secondsLeft--;
    if (secondsLeft < 0) {
        clearInterval(countdownInterval);
        countDownEl.innerHTML = 'TIEMPO AGOTADO';
    }
}

const countdownInterval = setInterval(updateCountDown, 1000);
updateCountDown();