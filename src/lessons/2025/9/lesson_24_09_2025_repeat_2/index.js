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
		name: 'Grigori',
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

const newUsers = []

for (const user of users) {
	const { name, surname } = user;
	const fullName = `${name} ${surname}`;
	newUsers.push(fullName);
}
console.log(newUsers)