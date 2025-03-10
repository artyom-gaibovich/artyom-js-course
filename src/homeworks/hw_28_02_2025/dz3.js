/*3) Сделай функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:

{
    next: 'пн',
        curr: 'вс',
    prev: 'сб',
}
 */
function daysObject() {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ];
    let todayDay = new Date().();
    return {
        yesterday: days[todayDay - 1],
        today: days[todayDay],
        tomorrow: days[todayDay + 1]
    }
}
console.log(daysObject());