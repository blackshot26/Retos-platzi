let millas = Number(prompt("¿Cuantas millas quieres convertir a kilometros?"));
let km = millas * 1.609;
km = km.toFixed(3);

console.log(`${millas} Millas son ${km}Km.`)