let nombreUsuario = prompt("¿Cual es tu nombre?");
let edadUsuario = Number(prompt("¿Cual es tu edad?"));

function calcularedad (nombreUsuario, edadUsuario) {
    let edadPasada = edadUsuario - 1;
    let edadFutura = edadUsuario + 1;

    document.write(`${nombreUsuario} el año pasado tenias ${edadPasada}años y el proximo año tendras ${edadFutura}años`);
};

calcularedad (nombreUsuario, edadUsuario);