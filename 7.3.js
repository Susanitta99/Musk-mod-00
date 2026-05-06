const readLine = require("readline-sync");
const radio = readLine.question("Introduce el radio: ");

function calcularCircunferencia(radio) {
    const circunferencia = 2 * Math.PI * radio
      console.log(`La circunferencia es ${circunferencia}`);
     }
      
    function calcularArea(radio) {
      const area = Math.PI * radio ** 2 ;
      console.log(`El área es ${area}`);
     }
        calcularCircunferencia(radio);
        calcularArea(radio);