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

const cbFunction = (value, index) => value % 2 === 0
const evenArray = arrayFilter.filter(cbFunction);

console.log(evenArray);
/**
 * Задача
 * const points = [[{x: 10, y: -5}, {x: 15, y: 20}, {x: 1, y:1}, {x: -1, y: -1}, {x: -1, y: 10}]]
 * Задачать получить новый массив, в котором у нас только те точки, которые лежат в первой червети
 */

const points = [[{x: 10, y: -5}, {x: 15, y: 20}, {x: 1, y: 1}, {x: -1, y: -1}, {x: -1, y: 10}]]


const functions = [
    () => console.log('Hello'),
    () => console.log('Hello 2'),
    () => console.log('Hello 3 '),
    () => console.log('Hello 4'),
]

const filtered = [
    {
        name: 'Игорь',
        age: 15,
        child: '1',
        child2: '2',
        child3: '3',
        child4: '4',
        child5: '5',
        child6: '6',
        child7: '7',
        child8: '8',
        child9: '10',
        child10: '10'
    },
    {name: 'Марина', age: 19},
    {name: 'Алексей', age: 19}
].filter((value, index) => value.age <= 18).map((value, index) => ({
    ...value,
    name: value.name.toUpperCase()
}));

const arrayFilter2 = [10, 50, 5, 10, 20, 1, 3];


/**
 * 3). Как работает метод forEach в отличие от map? В чем основное различие между этими методами?
 */


/**
 * 4). Если в методе filter не указано условие, что будет возвращено?
 */

/**
 * 5). Какие типы данных могут быть возвращены внутри метода map?
 * Можно ли использовать метод map для преобразования объектов?
 */


/**
 * 6). Может ли метод forEach вернуть новый массив? Почему или почему нет?
 */


/**
 *
 * 7.) Что будет, если в методе filter вернуть true для каждого элемента массива? Что произойдет с массивом?
 */



const arrayFilter3 = [1, 2, 3, 4, 5, 6, 7]

const filteredNew = arrayFilter3.filter((value, index) => false)

/**
 * 8). Можно ли использовать методы forEach, map и filter в цепочке (один за другим)? Приведи пример.
 */


/**
 *
 * 10). Какой метод из этих трех будет наиболее эффективен
 * , если тебе нужно просто пройти по массиву и что-то напечатать, а не создать новый массив? Почему
 */


/**
 * Метод reduce()
 */


const transactions = [-100, 500, 600, -100, 700]

const totalSum = transactions.reduce((acc, curr, index) => {
    return acc += curr
})


const data = [230, 50, 80, 999]

const average = data.reduce((acc, curr) => acc += curr) / data.length

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element === 999);

const userCollection = [
    {
        userId: 1,
        childrens: [
            {
                age: 18,
                userId: 995,
                name: 'Igor'
            },
            {
                age: 20,
                userId: 999,
                name: 'Egor'
            },
            {
                age: 5,
                userId: 998,
                name: 'Egor 2'
            },
        ]
    },
    {
        userId: 2,
        childrens: [
            {
                age: 99,
                userId: 9,
                name: 'UNIQUE 1'
            },
            {
                age: 55,
                userId: 10,
                name: 'UNIQUE 2'
            },
            {
                age: 99,
                userId: 11,
                name: 'UNIQUE 3'
            },
        ]
    },
    {
        userId: 1,
        childrens: [
            {
                age: 18,
                userId: 9,
                name: 'UNIQUE 10'
            },
            {
                age: 10,
                userId: 10,
                name: 'UNIQUE 10'
            },
            {
                age: 5,
                userId: 10,
                name: 'UNIQUE 8'
            },
        ]
    },
    {
        userId: 3,
        childrens: [
            {
                age: 1,
                userId: 15,
                name: 'UNIQUE 6'
            },
            {
                age: 5,
                userId: 16,
                name: 'UNIQUE 5'
            },
            {
                age: 5,
                userId: 17,
                name: 'UNIQUE 4'
            },
        ]
    },

]


const foundedUsers = userCollection.map(arr => {
    const foundedUser = arr.childrens.findIndex(user => user.name === 'UNIQUE 10')
    return foundedUser
}).filter(user => user !== -1)


const myArray = [1, 2, 3, 4, 3, 3, 5, 6, 7]

const existsThree = myArray.some((value, index) => value === 999)


/**
 * ([4,5,7,10], 999) : true
 */



const arr2 = [0, 1, [3, 4, [5, 6, [7, 9]]]];


const unpacked = arr2.flat(Infinity);

const arr1 = [1, 2, 99];

const result = arr1.flatMap((num) => (num === 2 ? [999, 998, 998] : 1));


const hello = 'Hello Wor1ld!';


let daNet = hello === 'Hello World!' ? 'DA' : 'NET'

console.log(daNet);