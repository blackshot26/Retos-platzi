alert("Inserta dos valores para ver cual es el mayor y cual es el menor de los dos.")

let num1 = Number(prompt("Escoge un numero..."));
let num2 = Number(prompt("Escoge otro numero..."));

const numberEvaluation = (num1, num2) => {

    if (num1 > num2) {
        console.log(`El primer numero: ${num1} es Mayor que el segundo numero ${num2}`);
    }
    else if (num2 > num1) {
        console.log(`El segundo numero: ${num2} es Mayor que el primer numero ${num1}`);
    }
    else {
        console.log(`Los numero son iguales`);
    }
}

numberEvaluation(num1,num2);