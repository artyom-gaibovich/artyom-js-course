"use strict";
/**
 * Сделать методы у объекта car, для получения name:
 * 	- car
 * 	- people
 * 	- engine
 */


const car = {
	name : "BMW",
	people: [
		{
			name: 'Yuriy',
			getPeopleName(){console.log(this.name)},
		},
		{
			name: 'Grisha',
			getPeopleName(){console.log(this.name)}
		}

	],
	engine: {
		name: "II18N1",
		getEngineName(){console.log(this.name)},
		getEngineNameArrow : () => {console.log(this.name)}
	},
	getName(){console.log(this.name)}




}
car.engine.getEngineNameArrow();
car.engine.getEngineName();
car.getName();
car.people[0].getPeopleName();
car.people[1].getPeopleName();
