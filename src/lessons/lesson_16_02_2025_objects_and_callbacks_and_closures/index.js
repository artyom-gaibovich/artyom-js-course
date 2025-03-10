/**
 * Колбэк функции
 */
const seedrandom = require('seedrandom');


function callback() {
    console.log('Это колбэк функция')
}

const arrayOfNumbers = ['Dog', 'Cat', 'Digger']

function toUpperCaseNewCallback(element, index, arrayOfNumbers) {
    return element.toUpperCase();
}

const squareNumbers = arrayOfNumbers.map(toUpperCaseNewCallback)


console.log('Hello world!')


/**
 * Задание 3:
 * Создай Map, в котором ключами будут названия фигур (square, circle, triangle), а значениями — функции, которые рассчитывают их площадь.
 *     - Для квадрата: S = side²
 *     - Для круга: S = πr²
 *     - Для треугольника: S = (base * height) / 2
 *
 * Напиши функцию calculateArea(shape, ...args), которая принимает название фигуры и параметры, необходимые для вычисления площади.
 */

const areaCalculators = new Map([
    ["square", (side) => side **2],
    ["circle", (radius) => Math.PI * radius ** 2],
    ["triangle", (base, height) => (base * height) / 2]
]);

function calculateArea(shape ) {
    return areaCalculators.get(shape)
}

                                1



/**
 * Задание 4:
 * Создай функцию simpleHash(str), которая принимает строку и возвращает её хеш (сумму всех кодов символов % 1000).
 */


function simpleHash(inputString) {
    const splitString = inputString.split('')
    let sum = 0;
    splitString.forEach(element=>{
        const num = element.charCodeAt(0)
        sum+=num
    })
    const hashValue = sum % 1000;
    return hashValue
}



const rng = seedrandom(new Date());




function Parent() {
    let counter = 0;

    return function() {
        counter++
        return counter;
    }
}

const counter1 = Parent()
const counter2 = Parent()


counter1()


/**
 * 1. Перед выполнением ДЗ создай новую ветку, в формате:
 * homeworks/[DD_MM_YEAR]
 * 2. Переключись на эту ветку
 * 3. Создай папку по пути homeworks/hw_[DD_MM_YEAR]
 * 4. Сделай ДЗ, закоммить изменения, и сделай пул риквест
 */