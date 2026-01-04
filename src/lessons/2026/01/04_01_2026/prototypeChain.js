

function Dog () {
	this.name = "Dog";
	/*this.bark = function() {
		console.log("bark from object Dog", ", dog name:", this.name);
	}*/
}
/*
Dog.prototype.bark = function() {
	console.log("bark from prototype Dog", ", dog name:", this.name);
}*/

Dog.__proto__.__proto__.bark = function() {
	console.log("bark from prototype Object", ", dog name:", this.name);
}

const dog = new Dog();

dog.bark();

