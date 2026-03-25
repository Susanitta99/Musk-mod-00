//Número par//
const readLine = require("readline-sync");
let num1 = readLine.question("Introduce un número: ");
let num2 = readLine.question("Introduce otro numero: ");
let num3 = readLine.question("Introduce otro número: ")
;
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log("Hay al menos un número par");
} else { 
    console.log("No hay números pares");
}
