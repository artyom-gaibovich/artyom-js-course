const user = {
	firstName: 'John',
	lastName: 'Doe',
};


function formatName(firstName, lastName) {
	console.log(this) //undefined в use strict режиме
	return `${firstName} ${lastName}`;
}

console.log(user.firstName);
console.log(user.lastName);
console.log(user.firstName, user.lastName);
//Дан объект `calculator` с методами `add` и `multiply` и свойством `value`.
//Напиши код, который заставит методы работать корректно с этим свойством, даже если их вызывать отдельно (используй `bind`).
const calculator = {
	value: 10,
	add(a) {
		this.value += a;
	},
	addFunc (a) {
		console.log(this)
		const addArrow = () => {
			console.log(this)
		}
		addArrow()

	},
	addArrow: () => {
		console.log(this) // undefined
	},
	multiply(b) {
		this.value *= b;
	},
};


const calculatorTiny = {
	value: 1,

}


/**
 * call
 * apply
 *
 * bind
 *
 *
 * (позволяют задать чему будет равно this при вызове функции)
 */

const myAdd = calculator.add.bind(calculator);
myAdd()




calculator.add.call(calculatorTiny, 100)
calculator.add.apply(calculatorTiny, [100])
console.log(calculatorTiny);