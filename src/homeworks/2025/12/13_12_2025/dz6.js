function isSameMonth(date1, date2){
    const dateA = new Date(date1);
    const dateB = new Date(date2);
    return dateA.getFullYear() === dateB.getFullYear() && dateB.getMonth() === dateA.getMonth();
}

console.log(isSameMonth("2024-01-01",
"2024-01-15"));
console.log(isSameMonth("2024-01-01",
    "2024-03-15"));
console.log(isSameMonth("2024-01-01",
    "2027-01-15"));