'use strict';


/**
 * Scope Global
 * - func changeCount()
 * - func changeCount1()
 * - func changeCount2()
 */



/**
 * Scope func changeCount()
 * - count
 *
 */


/**
 * Scope func changeCount1()
 * - num
 */


/**
 * Scope func changeCount2()
 * - num
 */

function changeCount() {
	let count = 0;
	return function(num) {
		count+=num;
		console.log(`count: ${count}`);
		debugger
	}
}

{
	const a = 10;
	{
		{
			console.log(a);
		}
	}
}

const changeCount1 = changeCount();
const changeCount2 = changeCount();
const changeCount3 = changeCount();



changeCount1(10);

changeCount1(50);
changeCount2(-99999);


changeCount1(0);

console.log(changeCount1);
console.log(changeCount2);


/**
 * D/Z TODO
 * Сделать функцию пользоватея, которая берет за основу
 * userInfo и за счет замыкания создает новый объект, с которым
 * можно работать как user1.increase(100);
 *
 */

const userInfo = {
	balance: 0,
	operations: 0,
	increase(sum) {
		this.balance += sum;
		this.operations++;
	}

}