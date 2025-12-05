/**
 * 4. Пишем функцию getDaysBetweenDates
 * @param date1
 * @param date2
 * @returns {number}
 */
function getDaysBetweenDates(date1, date2) {
	const diff = date2 - date1; // миллисекунды
	return diff / 1000 / 60 / 60 / 24;
}



const date1 = new Date(2024, 0, 31);
const date2 = new Date(2025, 0, 31);

console.log(getDaysBetweenDates(date1, date2));
