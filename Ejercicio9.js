//De número a letra//
const readLine = require("readline-sync");
function letras(numero) {
    const numeros = [
        "cero", "uno", "dos", "tres", "cuatro", 
        "cinco", "seis", "siete", "ocho", "nueve", "diez"
    ];
    return numeros[numero];
}


function solicitarNumero() {
    let numero;
    do {
        const input = readLine.question("Introduce un número del 0 al 10: ");
        numero = parseInt(input); 
        if (isNaN(numero) || numero < 0 || numero > 10) {
            console.log("Por favor, introduce un número válido entre 0 y 10.");
        }
    } while (isNaN(numero) || numero < 0 || numero > 10);

    console.log(`El número ${numero} en letras es: ${letras(numero)}`);
}
solicitarNumero();
