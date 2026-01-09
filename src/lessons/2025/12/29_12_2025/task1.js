/**
 * Реализовать класс User, со свойствами:
 * 	логин, пароль
 *
 * Пароль должен перевернуться и в таком виде храниться.
 * 	Пароль и логин после создания изменить нельзя.
 *
 * 	Реализовать методы:
 * 	Сверки пароля (передаем пароль)
 * 	Смены пароля (апередаем старый, новый пароль)
 */

class User {
    #login
    #password
    constructor(login, password) {
        this.#login = login;
        this.#password = this.#reverseStr(password);
    }
    #reverseStr(str){
        return str.split('').reverse().join('')
    }
    checkPassword(password) {
        return this.#password === this.#reverseStr(password);
    }
    changePassword(newPassword, oldPassword) {
        if (oldPassword === this.#reverseStr(this.#password)){
            return this.#password = this.#reverseStr(newPassword);
        }
    }
}
const user1 = new User('GRISA', "123123");
console.log(user1.checkPassword("123123"));
console.log(user1.checkPassword("1231"));
console.log(user1.changePassword("1231", '123123'));
console.log(user1.checkPassword("1231"));