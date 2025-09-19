const cart = {
    products: [],
    getProducts() {
        return this.products;

    },

    /**
     * Получить продукт из корзизны по ID-шнику
     */
    getProductById(id) {
        return this.products.find(product => product.id === id);

    },

    /**
     * Удалить продукт из корзины по ID-шнику
     */
    deleteProduct(id) {
        this.products = this.products.filter(product => product.id !== id);
    },


    /**
     * Добавить продукт в корзину
     */
    addProduct({id, title, price}) {
        this.products.push({id, title, price})
    },

    /**
     * Посчитать суммарную стоимость всех продуктов добавленных в корзину
     */
    calcTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    },
};

cart.addProduct({id: 1, title: "Pepsi", price: 100});
cart.addProduct({id: 2, title: "Chips", price: 150});
console.log(cart.getProducts());
console.log("Product with ID 1:", cart.getProductById(1));
console.log("Total price:", cart.calcTotalPrice());
cart.deleteProduct(1);
console.log("After deleting ID 1:", cart.getProducts());