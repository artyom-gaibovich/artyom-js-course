//3. Создай функцию transformNumbers, которая принимает массив чисел и возвращает новый массив, где:
//— Чётные числа умножены на 2
//— Нечётные увеличены на 1. Используй map.

function transformNumbers(arr) {
    return arr.map(num => num % 2 === 0 ? num * 2 : num + 1);
}
console.log(transformNumbers([1, 2, 3, 4]));