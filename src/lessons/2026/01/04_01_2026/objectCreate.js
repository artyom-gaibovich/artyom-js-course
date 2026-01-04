
// 1) Наследование через Object.create

const user = {


	log() {
		console.log("log from object")
	}
}

const newUser = Object.create(user)

console.log(newUser)


// 2, собственнык свойства
newUser.email = 'NewGrisha@mail.ru'
newUser.password = 'dasdhhd21312j'
console.log(newUser.name)
