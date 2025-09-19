/*5. find (усложненное): Дан массив товаров:
    [
        { id: 1, name: "Laptop", inStock: true },
        { id: 2, name: "Phone", inStock: false },
        { id: 3, name: "Tablet", inStock: true }
    ]
Напиши функцию findOutOfStock(products),
которая возвращает первый товар с inStock: false или null, если такого нет*/

const listOfProducts = [
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Phone", inStock: false },
    { id: 3, name: "Tablet", inStock: true }
]
function findOutOfStock(products) {
    return products.find(product => !product.inStock) || null;
}
console.log(findOutOfStock(listOfProducts));
console.log(findOutOfStock([{ id: 1, name: "TV", inStock: true }]));