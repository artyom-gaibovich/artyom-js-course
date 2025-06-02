'use strict';

console.log(this);

function addFirst(first, second) {
	console.log(this);
	return first + second;
}


const addSecond = (first, second) => {
	console.log(this);

	function addThird() {
		console.log(this);
		debugger
	}

	addThird();
	return first + second;
};


const user = {
	name: 'John',
	email: 'john@example.com',
	getName: function() {
		debugger
		console.log('Hello', this.name);
	},
	getNameArrow: () => {
		console.log(this.name);
	},
};


const user2 = {
	name: 'Dima',
	email: 'dima@example.com',

};

/*
user.getName()
user.getNameArrow()
*/

user2.getName = user.getName;

/*

user2.getName();
*/


const user3 = {
	name: 'Dima',
	email: 'dima@example.com',
};

const newGetName = user.getName;

user3.getName = newGetName;

/*newGetName()
user3.getName()*/

//var, let, const, functions, arguments
//Scope Chain
//this




function funcValidate(fn) {

	 function validate(...args) {
		Object.values(arguments).forEach((value) => {
			if (typeof value !== 'number') {
				throw new Error(`Value ${value} is not a number`);
			}
		})
	}
	validate();
	fn()
}




function sumFunc(num1, num2) {
	return num1 + num2;
}

funcValidate()


sumFunc(1, 9);