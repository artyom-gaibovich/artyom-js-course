/*
Создай объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведи созданную дату на экран в формате год-месяц-день.*/

const monthMap = new Map([
    [0 , 'January'],
    [1 ,'February'],
    [2 ,'March'],
    [3, 'April'],
    [4, 'May'],
    [5, 'June'],
    [6, 'July'],
    [7,'August'],
    [8,'September' ],
    [9,'October'],
    [ 10,'November' ],
    [11,'December'],
])
console.log()

const currentTime = new Date();
const dateMap = new Map([
    ['Year', currentTime.getFullYear()],
    ['Month', monthMap.get(currentTime.getMonth())],
    ['Day', currentTime.getDay()],
]);

console.log(dateMap.get('Month'));
console.log(dateMap.get('Year'));

