/* Сделать сортировку по по возрасту

const users = [
    { name: 'Vasya', age: 30 },
    { name: 'Artik', age: 60 },
    { name: 'John', age: 15 },
    { name: 'Elena', age: 45 },
    { name: 'Venya', age: 12 },
];

users.sort((a, b) => a.age - b.age);
console.log(users)
*/
const users = [
    { name: 'Vasya', surname: 'Girshin', age: 30, child: ['Egor', 'Vanya'] },
    { name: 'Artik', surname: 'Egorkin', age: 60, child: ['Vanya'] },
    { name: 'John', surname: 'Vovkin', age: 15, child: [] },
    { name: 'Elena', surname: 'Elenkina', age: 45, child: ['Egor 2'] },
    { name: 'Venya', surname: 'Venyankin', age: 12, child: ['Egor', 'Vanya', 'Vanya'] },
];

/**
 * Надо преобразовать юзеров к виду:
 * {fullname: 'Vasya Girshkin', childNum: 2}
 */

const newArrayUsers = [
        {fullname: 'Vasya Girshkin', childNum: 2},
        {fullname: 'Artik Egorkin', childNum: 1},
        {fullname: 'John Vovkin', childNum: 0},
        {fullname: 'Elena Elenkina', childNum: 1},
        {fullname: 'Venya Venyankin', childNum: 3},
    ]
;
const userData = users.map(user => {
    return {fullname: user.name +" "+ user.surname, childNum: user.child.length};
} )
console.log(userData);