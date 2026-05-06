function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
    }
    return true; 
  }
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Introduce un número: ', (numero) => {
    numero = parseInt(numero);
    if (esPrimo(numero)) {
      console.log(`${numero} es primo.`);
    } else {
      console.log(`${numero} no es primo.`);
    }
    rl.close();
  });
  