const date = new Date(2025, 1, 1);


console.log('Год:', date.getFullYear());
console.log('Месяц:', date.getMonth());
console.log('День:', date.getDate());
console.log('Timestamp:', date.getTime());
console.log('День недели:', date.getDay());

const msFromDayStart =
    date.getHours()
    date.getMinutes()
    date.getSeconds()
    date.getMilliseconds();

console.log(msFromDayStart);