
class Car {
	static counter = 0;

	constructor(mark) {
		this.mark = mark
		Car.counter+=1
	}

	static getCounter() {
		return Car.counter;
	}
}


console.log(Car.getCounter())

const newCar = new Car("BMW")
const newCar2 = new Car("Lada")

new Car("Lada")
new Car("Lada")
new Car("Lada")
new Car("Lada")

new Car("Lada")

console.log(Car.getCounter())

