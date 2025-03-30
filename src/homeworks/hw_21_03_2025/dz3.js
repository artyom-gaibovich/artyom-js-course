//Покажи два способа возвращения объекта из стрелочной функции
const getObject = () => ({name: "John", family: "Doe" })
console.log(getObject())

const getObject2 = () => {
    return {name: "Jane", family: "Doe" };
};
console.log(getObject2())