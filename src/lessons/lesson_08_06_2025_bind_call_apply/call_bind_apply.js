'use strict';


const user = {
	name: 'John',
	cash: 0,
	email: 'john@example.com',
	getName: function() {
		debugger
		console.log('Hello', this.name);
	},

	getNameArrow: () => {
		console.log(this.name);
	},

	transactions : []
};


const user2 = {
	cash: 0,
	name: 'Johnna',
	transactions : []
}



const balanceManager = {
	addTransaction(cash) {
		this.transactions.push(cash);
		console.log('На счет добавлено: ', cash)
	}
}



const addTransactionUser1 = balanceManager.addTransaction.bind(user);
const addTransactionUser2 = balanceManager.addTransaction.bind(user2);



addTransactionUser1(999, 1);
addTransactionUser1(-999);

addTransactionUser2(-10000000);

/*
increaseCash.call(user, ...[10, 'hello 1'])
increaseCash.call(user, ...[100, 'hello 2']);
increaseCash.apply(user, [10, 'hello 3'])


user;
user2;*/

user;
user2;
debugger
/**
 * call, apply
 *
 * bind
 */




