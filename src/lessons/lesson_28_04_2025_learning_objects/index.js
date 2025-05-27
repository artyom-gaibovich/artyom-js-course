const listOfNames = 'Egor, Igor, Vasya,        Fedya';

const arrayOfNames = listOfNames.split(',').map(el => {
	return el.trim();
});


const posts = ['Post1', 'Post2', 'Post3'];
let str = posts.reduce((acc, post) => acc += '___' + post);

const user = {
	name: 'John',
	email: 'john@gmail.com',
	age: 24,
	skills: [
		'Программирование',
		'Математика',
	],
};


/**
 * Методы
 */




const myUser = {
	name: 'John',
	surname: 'Smith',
	age: 29,
	skills: ['Language 1', 'Language 2', 'Language 3', 'Language 4', 'Language 5'],
	getFullName: function() {
		console.log(`${this.name} : ${this.surname}`);
	},
	calc: function(a, b) {
		return a + b;
	},
	calcNew(a, b) {
		return a + b;
	},
	getFullNameArrow: () => {
		console.log(`${this.name} : ${this.surname}`);

		},


};

myUser.getFullName();
myUser.getFullNameArrow();

const result = myUser.calc(10, 20);
const result2 = myUser.calcNew(10, 20);


console.log();