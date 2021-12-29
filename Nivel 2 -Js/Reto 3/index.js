let limiteSuperior = Number(prompt("Inserta un limite superior."));
let limiteInferior = Number(prompt("Inserta un limite inferior."));
let numero = Number = Number(prompt("Inserta un numero."));

const limit = (limiteSuperior,limiteInferior,numero) => {
    if (numero > limiteSuperior) {
        console.log(`El numero ${numero} es mayor al limite permitido`);
    } else if (numero < limiteInferior) {
        console.log(`El numero ${numero} es menor al limite permitido`);
    } else {
        console.log(`El numero ${numero} esta dentro de los limites permitido`);
    }
}

limit(limiteSuperior, limiteInferior, numero);