function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
      n--;
    } while (swapped);
  }
  
  const array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000000));
  
  console.log("Ordenando... esto puede tardar un momento.");
  const start = Date.now();
  bubbleSort(array);
  const end = Date.now();
  
  console.log(`El algoritmo bubble sort ha tardado ${(end - start) / 1000} segundos en ordenar 100000 elementos.`);
  