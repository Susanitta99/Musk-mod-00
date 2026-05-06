const readline = require('readline-sync');
const entrada = readline.question('Introduce un texto: ');

function generarMatriz(texto) {
    const palabras = texto.split(' ');  
    const matriz = []; 

    let fila = [];
    palabras.forEach((palabra, index) => {
        fila.push(palabra);
        
        if (fila.length === 5) {
            matriz.push(fila);
            fila = [];
        }
    });
    if (fila.length > 0) {
        matriz.push(fila);
    }

    return matriz;
}
const matriz = generarMatriz(entrada);
console.log(JSON.stringify(matriz));
