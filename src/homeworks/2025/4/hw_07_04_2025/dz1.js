/*1. Метод `push`
- Напиши функцию addToArray(arr, item), которая принимает массив и элемент
- А затем добавляет этот элемент в конец массива с помощью push.
- Верни новый массив.*/


function addToArray(arr, item) {
    arr.push(item);// твой код здесь
    return arr;
}

console.log(addToArray([1, 2, 3], 4)); // [1, 2, 3, 4]