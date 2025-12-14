
const user1 = {
	name : 'grisha',
	password : '1231312',
	getAge() {
		console.log(this.name)
	}
}

function User (name, password ) {
	this.name = name;
	this.password  = password;
/*	this.getAge = function () {
		console.log('From OBJECT', this.name)
	}*/
}

User.prototype.getName = function () {
	console.log('From prototype', this.name)
}

User.prototype.checkPassword = function (password) {
	return this.password === password;
};

User.prototype.changePassword = function (newPassword) {
	this.password = newPassword;
};

/*

Object.prototype.getAge = function () {
	console.log('From OBJECT prototype', this.name)
}
*/

const userNew = new User('GRISA', 123123);
const userNew2 = new User('GRISA', 123123);
const userNew3 = new User('GRISA', 123123);

userNew2.getName();
// JS ищет метод:
// 1) ищет в самом объекте userNew2
// 2) Если не найден ищет в User.prototype
// 3) Если не нашел в User.prototype – ищет далее по цепочке (Object.prototype)

// Прототипная цепочка

/**
 * user1
 *   ↓ [[Prototype]]
 * User.prototype
 *   ↓ [[Prototype]]
 * Object.prototype
 *   ↓
 * null
 */

// проверка:
console.log(User.prototype.__proto__);


