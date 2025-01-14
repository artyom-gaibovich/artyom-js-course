//10) Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.
let massSomeNum = [1, 2, 3, 4, 5]

// 1-ый способ
for (let i = 0; i < massSomeNum.length; i++) {
    massSomeNum[i] = massSomeNum[i] + 3;
}

// 2-ой способ


console.log(massSomeNum.map(el => el + 3))
