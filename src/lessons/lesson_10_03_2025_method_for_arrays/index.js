/**
 * forEach
 */


/*
const array = [10, 50, 10, 20];


array.forEach((value, index) => {
        console.log(value, index);
    }
)
*/


/**
 * map
 */


/*
Вариант без map
const arrayMap = [10, 50, 10, 20];

const newArray = []
for (let i = 0; i < arrayMap.length; i++) {
    newArray.push(arrayMap[i] * 2 + 100);
}
*/

const arrayMap = [10, 50, 10, 20];

const newArray = arrayMap.map((value, index) => value * 2 + 100)


/**
 * filter
 */



const arrayFilter = [10, 50, 5, 10, 20, 1, 3];
// К примеру мы хотим убрать все нечетные элементы, хотим такой массив [10,50,10,20]

const evenArray = arrayFilter.filter((value, index) => value % 2 === 0);


/**
 * Задача
 * const points = [{x: 10, y: -5}, {x: 15, y: 20}, {x: 1, y:1}, {x: -1, y: -1}, {x: -1, y: 10}]
 * Задачать получить новый массив, в котором у нас только те точки, которые лежат в первой червети
 */

const points = [{x: 10, y: -5}, {x: 15, y: 20}, {x: 1, y:1}, {x: -1, y: -1}, {x: -1, y: 10}]
const someArrayFunc = (value, index) => {
    const {x, y} = value
    if (x <= 0 && y > 0) {
        return true;
    }
}
const oneOfFour = points.filter(someArrayFunc);

console.log(oneOfFour);