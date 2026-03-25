
const readLine = require("readline-sync");
const entrada = readLine.question("Introduce una lista de números: ");
const numeros = entrada.split(',').map(numero => parseFloat(numero.trim()));

function sumarNumeros(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
function calcularMedia(numeros) {
    const suma = sumarNumeros(numeros);
    return suma / numeros.length;
}
    console.log(`Suma: ${sumarNumeros(numeros)}`);
    console.log(`Media Aritmética: ${calcularMedia(numeros)}`);
