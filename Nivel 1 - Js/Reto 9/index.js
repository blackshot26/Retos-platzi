var dias = Number(prompt("¿Cuantos dias quieres convertir a horas, minutos y sengundos?"));
var horasDia = dias * 24;
var minutosDia = horasDia * 60;
var segundosDia = minutosDia * 60;

console.log(`En ${dias} dias hay ${horasDia} horas.`);
console.log(`En ${dias} dias hay ${minutosDia} minutos.`);
console.log(`En ${dias} dias hay ${segundosDia} segundos.`);