// Класс "Корзина товаров" (Cart)
// items[] - свойство (коллекция),
// items состоит из {id : 1, title : "Товар 1", price: 10}


// addItem(item) - добавление товара в корзину
// removeItem(id) – удаление товара из корзины по id
// getItem(id) – получение товара по id

/*.push() – добавить в массив
.find() – найти элемент в массиве
,filter() – можно для фильтрации использовать,*/

function Cart(){
    this.items = [];
}
Cart.prototype.addItem = function(item){
   this.items.push(item);
}
Cart.prototype.getItem = function(id){
    const item = this.items.find(item => item.id === id);
    if (!item) {
        console.log("Item not found");
        return;
    }
    return item ;
}
Cart.prototype.removeItem = function(id){
    this.items = this.items.filter(item => item.id !== id);
}

const cart = new Cart();

cart.addItem({id : 1, title : "Товар 1", price: 10});
cart.addItem({id : 10, title : "Товар 10", price: 100});
cart.addItem({id : 4, title : "Товар 4", price: 2});
cart.addItem({id : 3333, title : "Товар 3333", price: 4000});

cart.removeItem(4);
console.log(cart)
console.log(cart.getItem(4));
