
// 1) Наследование через Object.create

const user = {

	init(email, password) {
		this.email = email;
		this.password = password;
	},

	log() {
		console.log("log from object")
	}
}

const newUser = Object.create(user)

console.log(newUser)


// 2, инициализация

newUser.init("adda@mail.com", "213123jdasjdas")

console.log(newUser)