const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function encontrarPalabrasRepetidas(texto) {
  const palabras = texto.toLowerCase().replace(/[,\.]/g, "").split(/\s+/);
  const frecuencia = {};
  const repetidas = new Set();

  for (const palabra of palabras) {
    if (frecuencia[palabra]) {
      frecuencia[palabra]++;
      repetidas.add(palabra);
    } else {
      frecuencia[palabra] = 1;
    }
  }

  return Array.from(repetidas);
}

rl.question("Introduce un texto: ", (texto) => {
  const resultado = encontrarPalabrasRepetidas(texto);
  if (resultado.length > 0) {
    console.log("Se repiten las siguientes palabras:", resultado.join(", "));
  } else {
    console.log("No se repiten palabras");
  }
  rl.close();
});
