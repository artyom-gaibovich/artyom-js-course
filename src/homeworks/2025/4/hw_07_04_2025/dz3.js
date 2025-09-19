/*3. Метод `shift`
- Напиши функцию removeFirstItem(arr), которая удаляет первый элемент из массива с помощью shift и возвращает его.
- Если массив пустой, возвращай "Массив пуст".*/


function removeFirstItem(arr) {
    const newarr = [...arr]
    if (newarr.length === 0) {
        return "Массив пуст";
    }
    return newarr.shift()
}

console.log(removeFirstItem(["яблоко", "банан", "апельсин"])); // "яблоко"
console.log(removeFirstItem([])); // "Массив пуст"