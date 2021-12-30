let animal = prompt("¿Cual es tu animal favorito?");

switch(animal){
    case 'tortuga':
    case 'Tortuga':
    case 'TORTUGA':
        console.log('A mí tambien me gustan las Tortugas XD')
        break;
    default:
        console.log(`Ese animal ${animal} es genial, pero prefiero las tortugas :P.`)
}