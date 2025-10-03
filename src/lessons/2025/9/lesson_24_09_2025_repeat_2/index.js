/**
 * const type: "undefined" | "object" | "boolean" | "number" | "string" | "function" | "symbol" | "bigint"
 */
const type = typeof true;


const filePath = [
	'controller/users.controller.ts', // index, value
	'controller/auth.controller.ts',
	'controller/auth.controller.js',
	'service/auth.controller.js',
	'service/auth.controller.js',
	'controller/auth.controller.js',
	'controller/auth.controller.py',
	'controller/proxy.controller.ts',
	{},
];


// index 0, 1, 2... n;
//
// BEST-PRACTICE: Не далем разнородные массивы

// 1-ый элемент это 0 index всегда !
console.log(filePath[0]);
// Последний элемент? array.length - 1
console.log(filePath[filePath.length - 1]);


// Вспоминаем объекты:
const user = {
	name: 'Grigori',
	surname: 'Vasikin',
	age: 29,
	children: [
		'первый',
		'второй',
	],
	isMarried: true,
};


// на выходе примерное такие данные:  ['Grigori Vasikin 2','Grigori Vasikin 2' ]

const users = [
	{
		name: 'Vasia',
		surname: 'Vasikin 2',
		age: 12,
		children: ['первый',
			'второй'],
		isMarried: true,
	},
	{
		name: 'Grigori',
		surname: 'Vasikin 2',
		age: 12,
		children: [],
		isMarried: true,
	},

	{
		name: 'Grigori',
		surname: 'Vasikin',
		age: 29,
		children: [
			'первый',
			'второй',
		],
		isMarried: true,
	}, {
		name: 'Grigori',
		surname: 'VS',
		age: 34,
		children: [
			'первый',
			'второй',
			'третий',
		],
		isMarried: false,
	}];

/*
const fruits = ['orange', 'apple']

const newFruits = fruits.map((fruit) => fruit.toUpperCase())

console.log(newFruits)*/

const filteredUsers = users.filter(function(user) {
	if (user.children.length > 2) {
		return true;
	}
	return false;
});

const filteredUsersArrow = users.filter(user => user.children.length > 2);
const newUsers = filteredUsersArrow.map((user) => `${user.name} ${user.surname}`);

console.log(newUsers);


/**
 * Задача 5
 * функция принимает users, и name. Возвращает user,
 * причем name регистронезависимый !.
 * Если user не найден, то null вернуть
 */

function findUserByName(users, name){

	const user = users.find(function(user){
		return user.name.toLowerCase() === name.toLowerCase();
	})
	if (!user){
		return null;
	}
	return user;
}
console.log(findUserByName(users, 'Vasia'))
console.log(findUserByName(users, 'VASIA'))
console.log(findUserByName(users, 'vasia'))
console.log(findUserByName(users, 'vAsIA'))
console.log(findUserByName(users, 'vasia1'))


const fruits = ['orange', 'apple', 'banana'];

const foundedFruit = fruits.find(function(fruit) {
	if (fruit === 'orange') {
		return true;
	}
	return false;
});

console.log(foundedFruit)

const first = 'super'

const second = 'sUpeR'

const third = 'SUPER'

console.log('//////////////////////////////ПРИВЕНИЕ К ОДНОМУ РЕГИСТРУ///////////////////////////')
console.log(first.toUpperCase(), first)
console.log(second.toUpperCase(), second)
console.log(third.toUpperCase(), third)

