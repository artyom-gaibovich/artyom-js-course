const b = new Date(2024, 5, 10,23,59)
const a = new Date(2024, 5, 10,10,30)
const c = new Date(2024, 5, 11)

function isSameDay(d1, d2){

    const checks = [d1.getDay() === d2.getDay(),d1.getMonth() === d2.getMonth(), d1.getFullYear() === d2.getFullYear()];

    return checks.every(Boolean)

}


console.log(isSameDay(a, b));
console.log(isSameDay(a, c));