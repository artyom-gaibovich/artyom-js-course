function getDaysBetween(date1, date2) {
    const utc1 = Date.UTC(
        date1.getFullYear(),
        date1.getMonth(),
        date1.getDate()
    );
    const utc2 = Date.UTC(
        date2.getFullYear(),
        date2.getMonth(),
        date2.getDate()
    );
    const diffInMs = Math.abs(utc2 - utc1);
    return diffInMs / (1000 * 60 * 60 * 24);
}
function getWeeksBetween(date1, date2){
    const days = getDaysBetween(date1, date2);
    return Math.floor(days / 7);
}
const dateA = new Date(2024, 0, 1);
const dateB = new Date(2024, 1, 15);
console.log(getWeeksBetween(dateA, dateB));