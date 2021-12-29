alert("Vamos a hacer una suma");

var num1 = parseInt(prompt("Ingresa un numero..."));
var num2 = parseInt(prompt("Ingresa otro numero..."));

function sumar (num1,num2) {
    let operacion = num1 + num2;

    document.write(operacion);
}

sumar (num1,num2);