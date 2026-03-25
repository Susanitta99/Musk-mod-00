function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  const array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000000));
  
  console.log("Ordenando... esto puede tardar un momento.");
  const start = Date.now();
  const sortedArray = quickSort(array);
  const end = Date.now();
  
  console.log(`El algoritmo quicksort ha tardado ${(end - start) / 1000} segundos en ordenar 100000 elementos.`);
  