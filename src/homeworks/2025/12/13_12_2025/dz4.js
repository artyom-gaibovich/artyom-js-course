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

const startDate = new Date(2024, 0, 1); // 2024-01-01
const endDate = new Date(2024, 1, 15); // 2024-02-15

console.log('Дней между датами:', getDaysBetween(startDate, endDate));