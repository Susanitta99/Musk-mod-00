const readline = require('readline-sync');
const entrada = readline.question('Introduce el tamaño de la matriz cuadrada: ');
const numero = parseInt(entrada, 10);
function generarMatriz(numero) {
    let matriz = []; 
    let contador = 1; 

    for (let i = 0; i < numero; i++) {
        let fila = [];

        for (let j = 0; j < numero; j++) {
            fila.push(contador);
            contador++;
        }
        matriz.push(fila);
    }
    return matriz;
}
const matriz = generarMatriz(numero);
console.log(matriz);
