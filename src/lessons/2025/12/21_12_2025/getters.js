

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
