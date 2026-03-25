function diferenciaArrays(array1, array2) {
    return array1.filter(num => !array2.includes(num));
  }
  const array1 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
  const array2 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10));
  
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);
  console.log("La diferencia de ambos conjuntos es:", diferenciaArrays(array1, array2));
  