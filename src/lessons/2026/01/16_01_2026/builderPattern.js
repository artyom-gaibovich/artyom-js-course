


class House {
	constructor(name) {
		this.name = name;
	}
}



class HouseBuilder {

	constructor(house) {
		this.house = house;
	}

	buildWalls() {
		this.house.walls = 'Стены';
		return this;
	}

	buildDoors() {
		this.house.doors = 'Дверь';
		return this;

	}

	getResult() {
		return this.house
	}
}

const house = new House('Мой дом')

const houseBuilder = new HouseBuilder(house)

const buildedHouse = houseBuilder.buildWalls().buildDoors().getResult()

console.log(buildedHouse)
