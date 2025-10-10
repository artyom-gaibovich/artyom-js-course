const user = {
    firstName: "John",
    lastName: "Doe",
}


function formatName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

console.log(user.firstName);
console.log(user.lastName);
console.log(user.firstName, user.lastName);
//Дан объект `calculator` с методами `add` и `multiply` и свойством `value`.
//Напиши код, который заставит методы работать корректно с этим свойством, даже если их вызывать отдельно (используй `bind`).
const calculator = {
    value: 10,
    add(a) { this.value += a; },
    multiply(b) { this.value *= b; }
}

const addFive = calculator.add;// Должно работать addFive(5) -> value становится 15