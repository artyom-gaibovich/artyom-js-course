/*5.Напиши функцию processUsers, которая:
— Фильтрует активных пользователей (isActive: true),
— Сортирует их по возрасту (возрастание),
— Возвращает массив имён.
    Создай функцию getArrayStats, которая принимает массив чисел и возвращает объект с:
    — min (минимум),
— max (максимум),
— average (среднее),
— total (сумма). Примени Math.min(минимум) , Math.max(максимум) и ***(метод массива)
.*/

function processUsers(users) {
    return users
        .filter(user => user.isActive)
        .sort((a, b) => a.age - b.age)
        .map(user => user.name);
}