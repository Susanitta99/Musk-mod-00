const readLine = require("readline-sync");
const radio = readLine.question("Introduce el radio: ");

function calcularAreaCircunferencia(radio) {
    const circunferencia = Math.PI * radio ** 2 ;
      console.log(`El área del círculo es ${circunferencia}`);
     }
        calcularAreaCircunferencia(radio);