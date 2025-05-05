/**
 * Итерирование по объекту
 */

const user = {
	name: 'Vas',
	age: 15,
	greet() {
		console.log('Привет!', this.name);
	},
};


/*
1 способ
for (const key in user) {
	if (key === 'age') {
		user[key] += 100;
	}
}*/


/**
 * 2 ой способ
 * for (const key of Object.keys(user) {
 *   console.log(user[key])
 * }
 */

/**
 * 3-ой способ объектно ориентированный
 *
 * Object.entries(user).forEach(([key, value]) => {
 * 	console.log(key, value);
 * })
 */

/**
 * Деструктуризация
 */

let someUser = {
	name: 'Vas',
	age: 15,
	country: 'Russia',
};


const someUserAdditionalProps = {
	isHasGirlfriend: false,
	isHasDog: true,
	car: 'BMW',
};


const newSomeUser = {
	...someUser,
	...someUserAdditionalProps,
};


/**
 * Optional Chaining
 */



const countries = {
	russia: {
		capital: {
			name: 'Moscow',
		},
	},
	china: {},
};


console.log(countries['russia']?.capital?.name);


/**
 * IProduct
 * {
 *   id: number,
 *   title: number,
 *   price: number,
 *
 * }
 *
 */

const cart = {
	products: [],
	getProducts() {

	},

	/**
	 * Получить продукт из корзизны по ID-шнику
	 */
	getProductById() {

	},

	/**
	 * Удалить продукт из корзины по ID-шнику
	 */
	deleteProduct() {
	},


	/**
	 * Добавить продукт в корзину
	 */
	addProduct() {

	},

	/**
	 * Посчитать суммарную стоимость всех продуктов добавленных в корзину
	 */
	calcTotalPrice() {

	},
};



