/*
Set — это итерируемая коллекция, которая:
– хранит только уникальные элементы;
– не имеет ключей, только значения;
– может содержать строки, числа, boolean, объекты и т. д.;
– сохраняет порядок вставки.
 */

const arrSet = new Set(['Russia', 'USA', 'London', 'London']);

// has(value) — проверяет наличие
const isHasRussia = arrSet.has('Russia');
const isHasBelgia = arrSet.has('Belgia');


// add(value) — добавление
arrSet.add('Russia');
arrSet.add('Paris');


// delete(value) — удаление

arrSet.delete('USA');


// clear(value) – очистка
arrSet.clear();

/*
Перебор Set

Set итерируется так же, как массив.
 */


const newCities = new Set(['Russia', 'USA', 'London', 'London']);


for (const city of newCities) {
	console.log(city, 'город');
}

console.log(arrSet);


/*
Set ⇄ Array: преобразования
Массив → Set (уникализация)
 */

const arr = ['a', 'b', 'a', 1];
const set = new Set(arr); // {"a", "b", size=2}

/*
Set → массив (через spread ...)
 */

const uniqueArr = [...set];


/**
 * Уникализация массива в одну строчку
 */

const uniqueValues = [...new Set(['a', 'a', 'b', 1])];


/**
 * et и объекты
 *
 * Важно понимать: Set считает объект уникальным по ссылке, а не по содержимому.
 */

const obj1 = { a: 1 };
const obj2 = { a: 1 }

const setObjects = new Set([obj1, obj2]);
console.log(setObjects);


/*
  Типичные ошибки

  Ошибка:
   ❌добавлять одинаковые строки и ждать, что Set их дублирует
   ✔помнить, что Set всегда уберет дубликаты


	Ошибка:
	❌ Ожидать, что одинаковые объекты считаются одинаковыми
	✔ Сравнение идёт по ссылкам, а не по значению.

	Ошибка:
	❌ Пытаться обращаться по индексу (set[0]), или по ключу
	✔ У Set нет индексов.

 */

fruitArr = ["apple", "banana", "apple", "orange", "banana"] ;

fruitSet= new Set(fruitArr);
console.log(fruitSet.size);

progArr = ["JS", "HTML", "CSS", "JS"];

progSet = new Set(progArr);

progSet.delete("HTML");
console.log(progSet.has("React"));
console.log(progSet)

function getUnique(arr){
	return [...new Set(arr)];
}
console.log(getUnique(progArr))

const strH = "hello"

helloSet = new Set(strH);
helloArr = [...new Set(helloSet)];
console.log(helloArr);
