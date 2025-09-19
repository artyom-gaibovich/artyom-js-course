/*Задание 3:
Создай Map, в котором ключами будут названия фигур (square, circle, triangle), а значениями — функции, которые рассчитывают их площадь.
- Для квадрата: S = side²
    - Для круга: S = πr²
    - Для треугольника: S = (base * height) / 2

Напиши функцию calculateArea(shape, ...args), которая принимает название фигуры и параметры, необходимые для вычисления площади.
*/
function squareCallBack(side){
    return side**2;
}
function circleCallBack(radius){
    return Math.PI*radius**2;
}
function triangleCallBack2(base, height){
    return base*(height/2);
}
const areaCalculators = new Map([
    ["square", (side) => side ** 2],
    ["circle", (radius) => Math.PI * radius ** 2],
    ["triangle", (base, height) => (base * height) / 2]
]);
function calculateArea(shape, ...args){
    return areaCalculators.get(shape);
}
console.log(calculateArea("triangle"))

