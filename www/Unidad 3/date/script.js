//Obtemos a ora e a fecha actual
let data = new Date();
console.log(data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds());
// otro formato
let dataFormateada = data.toLocaleString('gl-ES',{
    dateStyle: 'full',
    timeStyle: 'short'
});
console.log('Data formateada en Locale: ' + dataFormateada);

// outro formato
dataFormateada = data.toISOString()
console.log('Data ISO: ' + dataFormateada);

// con DateTimeFormat
let formato = new Intl.DateTimeFormat('gl-ES', {
    day: '2-digit', month: '2-digit', year: '2-digit'
});
console.log(`Data formateada YY/MM/DD: ${formato.format(data)}`);

formato = new Intl.DateTimeFormat('gl-ES', {
    day: '2-digit', month: '2-digit', year: 'numeric'
});
console.log(`Data formateada YYYY/MM/DD: ${formato.format(data)}`);

const partes = formato.formatToParts(data);
const obj = Object.fromEntries(partes.map(p => [p.type, p.value])); //converto o array partes nun obxecto 
console.log(`Fecha formateada YYYY/MM/DD: ${obj.year}-${obj.month}-${obj.day}`);

console.log(`Data con formato USA: ${obj.month}-${obj.day}-${obj.year}`);


//Operacións con DATAS 
let data1 = new Date(2022, 0, 1);
let data2 = new Date(2024, 9, 16);
console.log(data1.toString()); //Pomos o toString() pra evitar o retraso de console.log() a UTC (mostra 1 día menos)
console.log(data2.toString());

console.log(`Diferenza en dias: ${data2.getDate() - data1.getDate()}`);
console.log(`Diferenza en minutos: ${(data2 - data1) / (60 * 1000)}`);
console.log(`Diferenza en meses: ${(data2 - data1) / (60000 * 1440)}`) //60000 ms minuto * 1440 minutos día
console.log(`Diferenza en anos: ${(data2.getFullYear() - data1.getFullYear())}`);
