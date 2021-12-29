let num1 = Number(prompt("Ingresa un numero para la suma"));
let num2 = Number(prompt("Ingresa otro numero para la suma"));
let num3 = Number(prompt("Ingresa un numero para realizar la multiplicacion de la operacion anterior"));

function sumaExtrema(num1,num2,num3) {
    let operacion = (num1 + num2) * num3;

    document.write(operacion);
}

sumaExtrema(num1,num2,num3);