

//override (переопределить) метод

class Human {
	constructor(name, age) {
		this.name = name;
		this.age = age;

	}

	talk() {
		console.log('talk from Human');
	}

}


class Employee extends Human {
	constructor(job, name, age) {
		super(name, age);
		this.job = job;
	}

	talk() {
		console.log('talk from Employee');
	}


}

const employee = new Employee("Developer", "Vasya", 69);

employee.talk();



