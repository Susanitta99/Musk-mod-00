const readline = require('readline-sync');
const entrada = readline.question('Introduce un texto: ');

function esPalindromo(texto) {
    const textoLimpio = texto.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const textoInvertido = textoLimpio.split('').reverse().join('');
    
    
    if (textoLimpio === textoInvertido) {
        return true;  
    } else {
        return false; 
    }
}
if (esPalindromo(entrada)) {
    console.log('Es un palíndromo');
} else {
    console.log('No es un palíndromo');
}
