const { uuid } = require('uuidv4');

// Инкапслуяция один из ключевых принципов ООП. Инкапсуляция позволяет
// скрывать внутренее устройство объекта, чтобы код извне:
// – не мог изменить важные данные
// – взаимодействовал через публичный интерфейс


class User {
	#name;
	#id;
	constructor(name) {
		this.#name = name
		this.#init()
		this.#generateId()
	}

	printName () {
		console.log(this.#name)

	}

	#init() {
		console.log('Class initialized')
	}


	#generateId() {
		this.#id = uuid()
	}


}

const user2 = new User("Xasdasdas")


console.log(user2)