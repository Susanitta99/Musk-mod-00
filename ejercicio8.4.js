const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function obtenerFrecuencia(cadena) {
  const mapaFrecuencia = new Map();
  for (const char of cadena) {
    const lowerChar = char.toLowerCase();
    mapaFrecuencia.set(lowerChar, (mapaFrecuencia.get(lowerChar) || 0) + 1);
  }
  return mapaFrecuencia;
}

function sonAnagramas(palabra1, palabra2) {
  if (palabra1.length !== palabra2.length) return false;
  
  const frecuencia1 = obtenerFrecuencia(palabra1);
  const frecuencia2 = obtenerFrecuencia(palabra2);
  
  if (frecuencia1.size !== frecuencia2.size) return false;
  
  for (const [char, count] of frecuencia1) {
    if (frecuencia2.get(char) !== count) return false;
  }
  
  return true;
}

rl.question("Introduce una palabra: ", (palabra1) => {
  rl.question("Introduce otra palabra: ", (palabra2) => {
    if (sonAnagramas(palabra1, palabra2)) {
      console.log("Las palabras son anagramas.");
    } else {
      console.log("Las palabras no son anagramas.");
    }
    rl.close();
  });
});
