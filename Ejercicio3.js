//Factorial//
const readLine = require("readline-sync");
const numero = readLine.question("Introduce un número:");

function calcularFactorial(numero) {
   
    let factorial = 1;
    for (let n = 1; n <= numero; n++) {
        factorial *= n;
    } return factorial
} 
console.log(`El factorial de ${numero} es ${calcularFactorial(numero)}`);