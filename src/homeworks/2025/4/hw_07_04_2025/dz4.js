/*4. Метод `unshift`
- Напиши функцию addToStart(arr, item), которая добавляет элемент в начало массива с помощью unshift
и возвращает новый массив.*/


function addToStart(arr, item) {
    const newarr = [...arr]
    newarr.unshift(item);// твой код здесь
    return newarr;
}

console.log(addToStart(["б", "в"], "а")); // ["а", "б", "в"]