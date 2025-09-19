const r1 = Boolean('');
const r2 = Boolean(null);
const r3 = Boolean(0);
const r4 = Boolean(undefined);
const r5 = Boolean({});
const r6 = Boolean([]);


console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);

const arr = [1, 2];
if ('') {
	console.log('Hello world 1');
}

if (null) {
	console.log('Hello world 2');
}

if (undefined) {
	console.log('Hello world 3');
}

if (0) {
	console.log('Hello world 4');
}

if (arr.length > 0) {
	console.log('Массив не пустой, в нем есть элементов');
}

const res = parseInt('101', 2);

function sumArgs(...args) {
	return args.reduce((a, b) => a + b, 0);
}


console.log(sumArgs(1, 2, 3));

// Объявление функций (Function Declaration, Function Expression, Arrow Functions).

// Function Declaration

function someFunction(a, b) {
	return a + b;
}


const result = someFunction(10, 20);


const someArrowFunc1 = (a, b) => {
	return a + b;
}

const someArrowFunc2 = (a, b) => a + b;

let s = someArrowFunc1(2, 5);
let s2 = someArrowFunc2(2, 5);

const someFunc3 = function(a, b) {
	return a + b;
}


console.log(someFunc3(3, 4));

