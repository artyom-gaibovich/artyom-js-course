### SUMMARY. Список ключевых тем для повторения (по урокам):

1.  **Базовые конструкции (`lesson_29_11_2024_primitive_types_of_data`, `lesson_08_12_2024`, `lesson_06_12_2024_cycles`)**
    *   Примитивные типы данных (`number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`).
    *   Операторы: `=`, `==`, `===`, `%`, `**`, `+=`, `-=`.
    *   Циклы: `for`, `while`.
    *   Преобразование типов: `String()`, `Number()`, `Boolean()`, `parseInt()`, `parseFloat()`.
    *   Работа с `console.log`, `alert`.

2.  **Функции (`lesson_14_01_2025_work_with_arrays_and_functions/task3.js`, `lesson_27_01_2025_hash_functions_and_functions`)**
    *   Объявление функций (Function Declaration, Function Expression, Arrow Functions).
    *   Параметры и аргументы, оператор `...rest`.
    *   Возврат значения (`return`).
    *   IIFE (Immediately Invoked Function Expression).

3.  **Объекты (`lesson_05_05_2025_objects`, `lesson_28_04_2025_learning_objects`)**
    *   Создание объектов (литералы, `new Object()`).
    *   Методы объектов.
    *   Итерация по объекту: `for...in`, `Object.keys()`, `Object.values()`, `Object.entries()`.
    *   Деструктуризация объектов.
    *   Опциональная цепочка (`?.`).
    *   Проверка наличия свойства: `hasOwnProperty`, оператор `in`.

4.  **Массивы (`lesson_30_03_2025_continue_learning_arrays_method`, `lesson_10_03_2025_method_for_arrays`, `lesson_07_04_2025/task1.js`)**
    *   Создание массива.
    *   Основные методы: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`.
    *   Методы итерации: `forEach`, `map`, `filter`, `find`, `findIndex`, `some`, `every`, `reduce`.
    *   `includes`, `indexOf`.
    *   Иммутабельность vs мутабельность, копирование массивов (`...spread`, `Array.from()`, `slice()`).

5.  **Строки (`lesson_14_04_2025_learning_method_of_strings`, `lesson_14_04_2025_learning_method_of_strings_part_2`, `lesson_15_12_2024_reg_exp_and_work_with_str`)**
    *   Создание строк (`` ` ``, `''`, `""`).
    *   Свойство `length`.
    *   Методы: `toUpperCase()`, `toLowerCase()`, `includes()`, `startsWith()`, `endsWith()`, `slice()`, `replace()`, `replaceAll()`, `trim()`, `split()`.

6.  **`this` и управление контекстом (`lesson_02_06_2025_management_this`, `lesson_08_06_2025_bind_call_apply`)**
    *   Значение `this` в обычных функциях и стрелочных функциях.
    *   Методы `bind()`, `call()`, `apply()`.

7.  **Замыкания и Scope (`lesson_09_06_2025_bind_call_apply_p2/clouse.js`, `lesson_19_05_2025_context_execute_and_primitvs/scope-chain.js`)**
    *   Лексическое окружение (Lexical Environment).
    *   Замыкания (Closure).
    *   Поднятие (Hoisting) `var` и function declaration.

8.  **Работа с DOM (`lesson_08_06_2025_bind_call_apply/timer-not-wait.js`)**
    *   Поиск элементов: `getElementById`, `querySelector`.
    *   Обработка событий: `addEventListener`.
    *   Создание элементов: `createElement`, `append`.
    *   Манипуляции с классами: `classList`.

9.  **Прочее (`lesson_08_12_2025/timer-not-wait.js`)**
    *   Структуры данных: `Map`, `Set`.

---

### Задачи

#### Блок 1: Основы и Функции

1.  **Типы данных:** Напиши функцию `getType(value)`, которая принимает любое значение и возвращает его тип данных строкой (например, `'number'`, `'string'`, `'array'`, `'object'`). Учти, что `typeof null` возвращает `'object'`.
2.  **Сумма чисел:** Напиши функцию, которая принимает два числа и возвращает их сумму. Используй Function Declaration и Arrow Function.
3.  **Сумма нечетных чисел:** Напиши функцию, которая принимает число `n` и возвращает сумму всех нечетных чисел от 1 до `n` (используй цикл).

#### Блок 2: Объекты и Массивы

4.  **Анализ пользователей:** Дан массив пользователей из `lesson_28_04_2025/task1.js`. Напиши функцию, которая возвращает массив полных имен (`name + surname`) пользователей, у которых больше 1 ребенка.
5.  **Поиск в массиве объектов:** Дан массив пользователей. Напиши функцию `findUserByName(users, name)`, которая возвращает первого пользователя с заданным именем (регистронезависимо) или `null`.
6.  **Сортировка:** Отсортируй массив пользователей по количеству детей (по убыванию).
7.  **Сумма значений объекта:** Напиши функцию, которая принимает объект и возвращает сумму всех его числовых значений. `{a: 10, b: 20, c: 'hello'}` -> `30`.

#### Блок 3: Строки и `this`

8.  **Форматирование строки:** Напиши функцию `formatName(firstName, lastName)`, которая возвращает строку в формате "Фамилия, Имя". Если имя или фамилия не переданы, функция должна игнорировать их (например, `formatName('John')` -> `'John'`).
9.  **Контекст выполнения:** Дан объект `calculator` с методами `add` и `multiply` и свойством `value`. Напиши код, который заставит методы работать корректно с этим свойством, даже если их вызывать отдельно (используй `bind`).
    ```javascript
    const calculator = {
      value: 10,
      add(a) { this.value += a; },
      multiply(b) { this.value *= b; }
    };
    // Твой код здесь...
    const addFive = calculator.add; // Должно работать addFive(5) -> value становится 15
    ```

#### Блок 4: Замыкания и Работа с DOM

10. **Счетчик:** Создай функцию `createCounter()`, которая возвращает другую функцию. Возвращаемая функция при каждом вызове должна увеличивать внутренний счетчик на 1 и возвращать его текущее значение. (Используй замыкание).
11. **Генератор списка:** Напиши функцию, которая принимает массив строк (задач) и ID элемента в DOM. Функция должна очистить этот элемент и создать в нем список (`<ul>`) из этих задач. Каждая задача должна быть элементом списка (`<li>`).

