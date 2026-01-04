
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age
		if (!age || !(typeof age === 'number')) {
			throw new Error(`Not a person with name ${name}`)
		}
	}

	talk() {
		console.log('talk');
	}
}



class Employee extends Person {
	constructor(name, age, job) {
		super(name, age);
		this.job = job;

	}

	work() {
		console.log('work');
	}
}





const person = new Person("MyName", 24);

const employee = new Employee("MyName", 24, "developer");

person.work()
employee.work();
/*

 extends –> строит цепочку прототипов
 super() –> вызывает родительский конструктор
 методы автоматически попадают в прототип
 код становится чище, компкатнее, напоминает  C++, Java, C# и др, ООПшные языки
*/

