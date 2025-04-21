const newMyName = `Игорь Алексеевич "Лысый" Иванов`;

const name = newMyName.slice(0, newMyName.indexOf(' '));
const surname = newMyName.slice((newMyName.lastIndexOf(" ")) +1, (newMyName.length));

console.log(surname)
console.log(name)