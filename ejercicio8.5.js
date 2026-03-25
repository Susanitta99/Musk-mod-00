const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function invertirPalabra(palabra) {
  const stack = [];
  for (const char of palabra) {
    stack.push(char);
  }
  let palabraInvertida = "";
  while (stack.length > 0) {
    palabraInvertida += stack.pop();
  }
  return palabraInvertida;  
}

rl.question("Introduce una palabra: ", (palabra) => {
  console.log("La palabra invertida es:", invertirPalabra(palabra));
  rl.close();
});
