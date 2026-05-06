//Triángulo de asteriscos//
const readLine = require("readline-sync");
const altura = readLine.question("Introduce un número: ");

function Triangulo(altura) {
    for (let i = 1; i <= altura; i++) {
        let espacios = ' '.repeat(altura - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacios + asteriscos);
    }
}
Triangulo(altura);
