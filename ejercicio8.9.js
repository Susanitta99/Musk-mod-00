function estanBalanceados(texto) {
    let pila = [];
    
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
      
      if (char === '(') {
        pila.push(char);
      } else if (char === ')') {
        if (pila.length === 0) {
          return false;
        }
        pila.pop();
      }
    }
    
    return pila.length === 0;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Introduce un texto: ', (texto) => {
    if (estanBalanceados(texto)) {
      console.log('Están balanceados.');
    } else {
      console.log('No están balanceados.');
    }
    rl.close();
  });
  