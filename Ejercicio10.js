//Adivina el número//
const readLine = require("readline-sync");
const aleatorio = Math.floor(Math.random() * 10) +1;

let intentos = 0;
let aciertos = false;

while (aciertos === false) {
    let entrada = readLine.question("Introduce un número del 1 al 10: ");
    entrada = Number(entrada);
    intentos++;
    if (entrada === aleatorio){
        console.log("¡Estas de suerte, has acertado el número! Has utilizado " + intentos + " intentos");
        aciertos = true;
        console.log("El número era " + aleatorio);
    } else {
        console.log("El número no es correcto, introduce otro. Llevas " + intentos + "intentos");
    }
}