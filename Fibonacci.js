function fib(number) {
    if (number <= 0) return [];          
    if (number === 1) return [0];        
    if (number === 2) return [0, 1];     

    const fibArray = [0, 1];
    let counter = 2;

    while (counter < number) {
        fibArray[counter] = fibArray[counter - 1] + fibArray[counter - 2];
        counter++;
    }
    return fibArray;
}

console.log(fib(15));

