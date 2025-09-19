/*5. Метод `includes`
- Напиши функцию hasElement(arr, item), которая проверяет, есть ли элемент в массиве, используя includes.
- Верни true, если есть, иначе false.*/


function hasElement(arr, item) {
    if (arr.includes(item) === true){
        return true;
    }
    return false;// твой код здесь
}

console.log(hasElement([1, 2, 3, 4], 3)); // true
console.log(hasElement(["кот", "собака"], "попугай")); // false