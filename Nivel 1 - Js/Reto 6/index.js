let usuarioPizza = Number(prompt("¿Cuantas pizzas llevas?"));
let restasPizza = Number(prompt("¿Cuantas pizzas se comieron?"));

function restaPizza (usuarioPizza, restasPizza) {
    let operacion = usuarioPizza - restasPizza;

    document.write(`Quedaron ${operacion} pizzas despúes de la fiesta.`);
};

restaPizza (usuarioPizza, restasPizza);