

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

	get myName() {
		return "My name is :" + this.name;
	}

	set newName(newName) {
		this.name = newName;
	}

}


const user1 = new User("name", "oasswr");

user1.newName = "John";
console.log(user1.myName);


user1.newName = "AAA";
console.log(user1.myName);