// Class c


/**
 * 1. Зачем в JavaScript появились классы?
 *
 * Классы были добавлены в ES6, чтобы:
 * упростить чтение и поддержку кода;
 * сделать JS более понятным для разработчиков из других языков (Java, C#, PHP);
 * инкапсулировать логику в одном месте;
 * писать меньше «прототипного» кода вручную.

 * Под капотом всё по-прежнему работает через:
 * функцию-конструктор;
 * прототип.
 */


class User {
	constructor(name, password) {
		this.name = name;
		this.password = password;
		this.childs = []
	}

	getName() {
		console.log( this.name)
	}

	checkPassword(password) {
		return this.password === password;
	};

	changePassword(newPassword) {
		this.password = newPassword;
	}

}


class Book {}

const user1 = new User('GRISA', 123123);
const user2 = new User('fff', 123123);



console.log(user2.__proto__) // прототипы остались

console.log(user1 instanceof User) // проверка на принадлежность к классу
console.log(user2 instanceof Book) // проверка на принадлежность к классу
