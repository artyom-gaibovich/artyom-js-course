//4. Создай функцию getUnique, которая принимает массив и возвращает новый массив без дубликатов.

function getUnique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(getUnique(numbers));