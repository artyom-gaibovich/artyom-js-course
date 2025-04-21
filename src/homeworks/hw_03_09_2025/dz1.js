//1) Сделай функцию, которая определяет, примитивный этот тип данных или нет.

function IsItPrimitive(someData){
    return someData === null || (typeof someData !== 'object' && typeof someData !== 'function');
}

console.log(IsItPrimitive(true));
console.log(IsItPrimitive(42));
console.log(IsItPrimitive(null));
console.log(IsItPrimitive(function (){}));

