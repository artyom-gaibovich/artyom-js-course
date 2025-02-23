/*
Создай объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведи созданную дату на экран в формате год-месяц-день.*/
const date = new Map([
    ['Year', 2025],
    ['Month', 'February'],
    ['Day', 23]
]);

console.log(date.get('Year'),"-",date.get("Month"),"-",date.get("Day"));
