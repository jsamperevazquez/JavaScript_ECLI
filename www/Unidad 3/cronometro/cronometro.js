

const segundosInput = document.getElementById('segundos'); // input de duración en segundos
const tempoEl = document.getElementById('tempo'); // elemento que amosa o tempo
const mensaxesEl = document.getElementById('mensaxes'); // elemento para mensaxes accesibles
const btnStart = document.getElementById('btnStart');   // botón para iniciar
const btnStop = document.getElementById('btnStop');     // botón para parar

let intervalId = null; // identifica o setInterval activo
let remaining = 0;     // segundos restantes

/**
 * showMessage(msg: string): void
 * Amosa unha mensaxe accesible na interface.
 * Para mostrar as mensaxes: Conta atrás en marcha, Tempo rematado, Cronómetro detido, etc.
 */
function showMessage(msg) { mensaxesEl.textContent = msg || ''; }

/**
 * formatMMSS(total: number): string
 * Converte segundos totais en formato "mm:ss" (sempre con 2 díxitos).
 */
function formatMMSS(total) {
  //TODO: a implementar polo alumnado. 
  totalEnteiro = Math.max(0, Math.floor(total)); // Asegurarse de que é un enteiro non negativo
  const minutes = Math.floor(totalEnteiro / 60); // Calcular minutos
  const seconds = totalEnteiro % 60; // Calcular segundos restantes
  const formattedMinutes = String(minutes).padStart(2, '0'); // Formatear minutos con 2 díxitos
  const formattedSeconds = String(seconds).padStart(2, '0'); // Formatear segundos con 2 díxitos
  return `${formattedMinutes} : ${formattedSeconds}`; // Devolver a cadea formateada "mm:ss"
}

/**
 * readDuration(): number
 * Le a duración do input (segundos).
 * Se o valor non é numérico ou é negativo, devolve 10 segundos por defecto.
 */
function readDuration() {
  //TODO a implementar polo alumnado.
  const val = parseInt(document.getElementById('segundos').value, 10);
  if (isNaN(val) || val < 0) {
    return 10; // Valor por defecto
  }
  return val;
}

/**
 * updateTimeUI(): void
 * Actualiza na pantalla o tempo restante usando o formato mm:ss.
 */
function updateTimeUI() { tempoEl.textContent = formatMMSS(remaining); }

/**
 * start(): void
 * Inicia a conta atrás se non hai outra xa en marcha.
 */
function start() {
  //TODO a implementar polo alumnado.
  if (intervalId !== null) {
    return; // Xa hai unha conta atrás en marcha
  }
  remaining = readDuration(); // Ler a duración do input
  updateTimeUI(); // Actualizar a interface co tempo inicial
  showMessage('Conta atrás en marcha'); // Amosa mensaxe
  intervalId = setInterval(() => {
    remaining--; // Decrementar o tempo restante
    updateTimeUI(); // Actualizar a interface
    if (remaining <= 0) {
      clearInterval(intervalId); // Detén a conta atrás
      intervalId = null; // Restablecer o ID do intervalo
      showMessage('Tempo rematado'); // Amosa mensaxe de tempo rematado
    }
  }, 1000); // Actualizar cada segundo
  // Gardamos o ID do intervalo para poder detelo despois
  intervalId = intervalId;
}

/**
 * stop(): void
 * Detén a conta atrás, pon 00:00 e amosa unha mensaxe.
 */
function stop() {
  //TODO: a completar polo alumnado. Para deter a conta atrás e poñer remaining a 0.
  if (intervalId !== null) {
    clearInterval(intervalId); // Detén a conta atrás
    intervalId = null; // Restablecer o ID do intervalo
    remaining = 0; // Poñer remaining a 0
    showMessage('Cronómetro detido'); // Amosa mensaxe
  }
  updateTimeUI();
  showMessage('Cronómetro detido');
}

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);

// Estado inicial
remaining = 0;
updateTimeUI();
showMessage('');


