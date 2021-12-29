let totalPagar = Number(prompt("¿Cuanto se va a pagar?"));
let personas = Number(prompt("¿Cuantas personas son?"));
let propina = Number(prompt("¿Cual es el porcentaje de propina?"));
let impuesto = Number(prompt("¿Cual es el porcentaje del impuesto?"));

function cuentaPorPersona (totalPagar, personas, propina, impuesto) {
    let totalPropina = (propina * totalPagar) / 100;
    let totalImpuesto = (impuesto * totalPagar) / 100;
    let pagarPersona = Number((totalPagar + totalPropina + totalImpuesto) / personas);

    document.write(`El impuesto total es ${totalImpuesto}$`);
    document.write(`La propina es ${totalPropina}$`);
    document.write(`Cada persona va a pagar ${pagarPersona}$`);
}

cuentaPorPersona(totalPagar, personas, propina, impuesto);