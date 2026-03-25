 
 //Par-Impar,Positivo-Negativo//
 const readLine = require("readline-sync");
 const input = readLine.question("Introduce un número:");
 const num = parseInt(input);

 if (isNaN(num)) {
    console.log("No es un número.");
 } else if (num % 2 === 0 && num > 0) {
   console.log("El número es par y positivo");
 } else if (num % 2 === 0 && num < 0) {
   console.log("El número es par y negativo");
 } else if (num % 2 !== 0 && num > 0) {
   console.log("El número es impar y positivo");
 } else if (num % 2 !== 0 && num < 0) {
   console.log("El número es impar y negativo");
 }
 