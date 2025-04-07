/*4. Метод `unshift`
- Напиши функцию addToStart(arr, item), которая добавляет элемент в начало массива с помощью unshift
и возвращает новый массив.*/


function addToStart(arr, item) {
    arr.unshift(item);// твой код здесь
    return arr;
}

console.log(addToStart(["б", "в"], "а")); // ["а", "б", "в"]