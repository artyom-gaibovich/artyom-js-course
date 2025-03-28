/*1. flat: Дан массив [1, [2, 3], [4, [5, 6]], 7].
Напиши функцию flattenArray(arr, depth), которая возвращает массив, разглаженный до указанной глубины.
 */

numArr = [1, [2, 3], [4, [5, 6]], 7];

function flattenArray(arr, depth){
    return arr.flat(depth);
}
console.log(flattenArray(numArr, 1));