
const readline = require('readline-sync');
const entrada = readline.question('Introduce una lista de elementos separados por comas: ');
const elementos = entrada.split(',').map(elemento => elemento.trim());

function verificarElementos(array) {
    const elementosVistos = new Set();   
    const elementosRepetidos = new Set(); 

    for (const elemento of array) {
        if (elementosVistos.has(elemento)) {
            elementosRepetidos.add(elemento);
        } else {
            elementosVistos.add(elemento);
        }
    }
    if (elementosRepetidos.size === 0) {
        console.log('Todos los elementos son únicos.');
    } else {
        console.log('Los elementos repetidos son:', [...elementosRepetidos].join(', '));
    }
}
verificarElementos(elementos);
