let num1 = Number(prompt("Inserta un número como limite"));
let num2 = Number(prompt("Inserta otro número"));

const limite = (num1,num2) => {
    if (num2 <= num1) {
        console.log(`El número ${num2} esta dentro del limite permitido.`);
    } else {
        console.log(`El número ${num2} esta fuera del limite permitido.`);
    }
}

limite(num1,num2);