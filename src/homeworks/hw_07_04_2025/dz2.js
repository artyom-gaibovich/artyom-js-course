/*2. Метод `pop`
- Напиши функцию removeLastItem(arr), которая удаляет последний элемент из массива с помощью pop и возвращает его.
- Если массив пустой, возвращай строку "Массив пуст".*/


function removeLastItem(arr, item) {
    const newarr = [...arr]
    if (newarr.length === 0) {
        return "Массив пуст";
    }
    return newarr.pop();
}

console.log(removeLastItem([10, 20, 30]));
console.log(removeLastItem([]));