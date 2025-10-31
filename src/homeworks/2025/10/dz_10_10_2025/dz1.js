const user = {
	firstName: 'John',
	lastName: 'Doe',
};


function formatName(firstName, lastName) {
	console.log(this); //undefined в use strict режиме
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
	addFunc(a) {
		console.log(this);
		const addArrow = () => {
			console.log(this);
		};
		addArrow();

	},
	addArrow: () => {
		console.log(this); // undefined
	},
	multiply(b) {
		this.value *= b;
	},
};


const calculatorTiny = {
	value: 1,

};

const add = calculator.add.bind(calculatorTiny);

add(29)
const myAdd = calculator.add.bind(calculator);
myAdd();


calculator.add.call(calculatorTiny, 100);
calculator.add.apply(calculatorTiny, [100]);
console.log(calculatorTiny);

function createCounter(counterName) {
	let counter = 0;
	return function() {
		counter++;
		console.log(`[${counterName}]: ${counter}`);

	};
}

const counter1 = createCounter('Счетчик 1');
const counter2 = createCounter('Счетчик 2');
counter1();
counter1();
counter1();
counter1();


counter2();
counter2();
counter2();

counter1();
counter1();
counter1();
counter2();
counter2();

calculator.add.call(calculatorTiny, 50);
calculator.add.apply(calculatorTiny, [50]);

console.log(calculatorTiny);

function createCounter(){
	let counter = 0;
	return function (){
		counter++;
		console.log(counter)
	}
}
const childFunc = createCounter()
childFunc()
childFunc()
childFunc()

const childFunc2 = createCounter()

childFunc2()
childFunc2()
childFunc2()
