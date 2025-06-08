'use strict';


const user = {
	name: 'John',
	cash: 0,
	email: 'john@example.com',
	getName: function() {
		debugger
		console.log('Hello', this.name);
	},
/*
	increaseCash(someCash) {
		this.cash += someCash;
	},*/

	getNameArrow: () => {
		console.log(this.name);
	},
};

function increaseCash(someCash, msg) {
	this.cash += someCash;
	console.log(msg);
}

const user2 = {
	cash: 0,
	name: 'Johnna',
}


increaseCash.call(user, ...[10, 'hello 1'])
increaseCash.call(user, ...[100, 'hello 2']);

increaseCash.apply(user, [10, 'hello 3'])


user;
user2;
debugger
/**
 * call, apply
 *
 * bind
 */


