'use strict';

console.log(this)

function addFirst(first, second) {
	console.log(this)
	return first + second;
}





const addSecond = (first, second) => {
	console.log(this)

	function addThird () {
		console.log(this)
		debugger
	}
	addThird();
	return first + second;
}


const user = {
	name: 'John',
	email: 'john@example.com',
	getName: function() {
		console.log('Hello', this.name)
	},
	getNameArrow: () => {
		console.log(this.name)
	}
}


const user2 = {
	name: 'Dima',
	email: 'dima@example.com',

}

user.getName()
user.getNameArrow()

user2.getName = user.getName;


user2.getName();