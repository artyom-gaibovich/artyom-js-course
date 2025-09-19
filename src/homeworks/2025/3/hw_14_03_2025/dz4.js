/*- У тебя есть массив объектов, представляющих студентов с полями name и age. Напиши программу, которая:
     1. Уберет студентов младше 18 лет.
     2. Для оставшихся студентов выведет их имена в верхнем регистре.
   Например, для массива:
 */
const students = [
    { name: 'Марина', age: 20 },
    { name: 'Игорь', age: 15 },
    { name: 'Алексей', age: 19 }
]
const filtered = students.filter((value, index) => value.age <= 18);
console.log(filtered);
const uppercased = filtered.map((value, index) => ({age:value.age, name:value.name.toUpperCase()}));
console.log(uppercased);
