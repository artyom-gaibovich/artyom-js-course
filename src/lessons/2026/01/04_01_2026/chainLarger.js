
const person = {

	init(name) {
		this.name = name;
	},
	hello() {
		console.log("hello")
	}
}

const employee = Object.create(person)

employee.work = function() {
	console.log("work")
}

const bankEmployee = Object.create(employee)

bankEmployee.giveCredit = function() {
	console.log("giveCredit")
}

const bankDeveloper = Object.create(bankEmployee)
bankDeveloper.develop = function() {
	console.log("develop")
}

bankDeveloper.work()