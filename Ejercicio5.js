//Vocales//
const readLine = require("readline-sync");
const cadena = readLine.question("Introduce una cadena: ");

function contarVocales(cadena) {
    let contador = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(`El número de vocales en la cadena es: ${contarVocales(cadena)}`);
