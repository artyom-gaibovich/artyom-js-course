/*6. Метод `indexOf`
- Напиши функцию findIndex(arr, item), которая находит индекс элемента в массиве с помощью indexOf.
- Если элемент не найден, верни -1.*/


function findIndex(arr, item) {
    const i = arr.indexOf(item);
    return i;
}

console.log(findIndex(["a", "b", "c"], "b")); // 1
console.log(findIndex([10, 20, 30], 40)); // -1