function esSecuenciaValida(secuencia) {
    let pila = [];
    let pares = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    
    for (let i = 0; i < secuencia.length; i++) {
      let char = secuencia[i];
      
      if (pares[char]) {
        pila.push(char);
      } else if (Object.values(pares).includes(char)) {
        let ultimo = pila.pop();
        if (char !== pares[ultimo]) {
          return false;
        }
      }
    }
  
    return pila.length === 0;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Introduce una secuencia: ', (secuencia) => {
    if (esSecuenciaValida(secuencia)) {
      console.log('Secuencia correcta.');
    } else {
      console.log('Secuencia incorrecta.');
    }
    rl.close();
  });
  