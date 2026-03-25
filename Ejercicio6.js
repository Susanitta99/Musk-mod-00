//Calcular año bisiesto// 
const readLine = require("readline-sync");
const año = readLine.question("Introduce un año:");

function esBisiesto(año) {
 return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}
if (esBisiesto(año)) {
    console.log(`${año} es un año bisiesto.`);
} else {
    console.log(`${año} no es un año bisiesto.`);
}
