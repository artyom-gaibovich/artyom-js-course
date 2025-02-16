/*4)Есть объект user:
Вызови user.greet(), затем запиши user.greet в переменную greetFunc и вызови greetFunc(). Объясни разницу.
    Исправь потерю контекста, используя:
- bind()
- стрелочную функцию
Добавь метод delayedGreet, который через setTimeout выводит приветствие через 1 секунду, не теряя контекст.*/
const user2 = {
    name: "John",
    age: 32,

}
const user = {
    name: "Иван",
    age: 25,
    greet: function() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
};
user.greet()

const greetFunc = user.greet;
greetFunc();

const greetFuncBind = user.greet.bind(user);
greetFuncBind();

user2.greet = greetFunc;

const greetFuncArrow = () => user.greet();
greetFuncArrow();

//user.delayedGreet();