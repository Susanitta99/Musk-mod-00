//Rectángulo de asterioscos//
const readLine = require("readline-sync");
const base = readLine.question("Introduce la base del rectángulo: ");
const altura = readLine.question("Introduce la altura del rectángulo: ");

function dibujarRectangulo(base, altura) {
    let rectangulo = '';
   for (let i = 0; i < altura; i++) {
        for (let j = 0; j < base; j++) {
            if (i === 0 || i === altura - 1 || j === 0 || j === base - 1) {
                rectangulo += '*';
            } else {
                rectangulo += ' ';
            }
        }
        rectangulo += '\n';
    }

    console.log(rectangulo);
}
dibujarRectangulo(base, altura);