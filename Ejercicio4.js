//Tabla de multiplicar//
const readLine = require("readline-sync");
 const numero = readLine.question("Introduce un número:");

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
