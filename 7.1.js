const readLine = require("readline-sync")
const radio = readLine.question("Introduce el radio: ");

function calcularArea(radio) {
    const area = 2 * Math.PI * radio ;
    console.log(`El área del círculo es ${area}`);
   }
    calcularArea(radio);