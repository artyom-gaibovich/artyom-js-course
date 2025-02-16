/*Задание 3:
Создай Map, в котором ключами будут названия фигур (square, circle, triangle), а значениями — функции, которые рассчитывают их площадь.
- Для квадрата: S = side²
    - Для круга: S = πr²
    - Для треугольника: S = (base * height) / 2

Напиши функцию calculateArea(shape, ...args), которая принимает название фигуры и параметры, необходимые для вычисления площади.
*/
const areaCalculators = new Map([
    ["square", (side) => side ** 2],
    ["circle", (radius) => Math.PI * radius ** 2],
    ["triangle", (base, height) => (base * height) / 2]
]);

function calculateArea(shape, args ) {

}