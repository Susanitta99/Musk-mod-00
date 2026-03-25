
function transponerMatriz(matriz) {
    return matriz[0].map((_, i) => matriz.map(fila => fila[i]));
}
const matriz = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

const matrizTranspuesta = transponerMatriz(matriz);

console.log("Matriz original:", matriz);
console.log("Matriz traspuesta:", matrizTranspuesta);
