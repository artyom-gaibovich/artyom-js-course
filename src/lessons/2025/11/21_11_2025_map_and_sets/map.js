const weatherMap = new Map();


// установка значения мапы
const map = weatherMap
	.set('London', '10')
	.set('USA', '10');



// ПОЛУЧЕНИЕ значения мапы по ключу
console.log(map.get('London'));


// проверка значения мапы по ключу
console.log(map.has('London'));
console.log(map.has('Russia'));


// удаления значения мапы по ключу

map.delete('USA')
console.log(map)


// очистка мапы

map.clear()
console.log(map)



// свойство size

map.clear()
console.log(map)


const weatherMapNew = new Map(
	[
		['key1', 'value1'],
		['key2', 23123],
		['key3', true],
	]
);


/*
Map может использовать:

строки
числа
boolean
массивы
объекты

 */


const arr1 = [1, 2, 3];

const mapNew = new Map();
mapNew.set(1, 5);
mapNew.set(true, "yes");
mapNew.set(false, "no");
mapNew.set(arr1, "array123123");




mapNew.set({a: 1}, {b: 1});


/**
 * Важная особенность: ключи-объекты и массивы сравниваются по ссылке
 */
console.log(mapNew.get(arr1))


/**
 * Таким образом:
 * Map использует не значение,
 * а адрес в памяти (референс) непримитивного ключа.
 */

mapNew.set([1, 2, 3], "array123123");
mapNew.set([1, 2, 3], "array123123");
mapNew.set([1, 2, 3], "array123123");
mapNew.set([1, 2, 3], "array123123");
mapNew.set([1, 2, 3], "array123123");
mapNew.set([1, 2, 3], "array123123");



