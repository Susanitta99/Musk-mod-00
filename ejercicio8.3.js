const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularFrecuenciaCaracteres(cadena) {
  const mapaFrecuencia = new Map();
  
  for (const caracter of cadena) {
    const char = caracter.toLowerCase();
    mapaFrecuencia.set(char, (mapaFrecuencia.get(char) || 0) + 1);
  }
  
  return mapaFrecuencia;
}

rl.question("Introduce un texto: ", (texto) => {
  const resultado = calcularFrecuenciaCaracteres(texto);
  console.log("Mapa de frecuencias:", resultado);
  rl.close();
});
