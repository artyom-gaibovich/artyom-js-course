//Вопрос, как нам скопировать массив? (Иммутабельность)


const firstArray = [1, 2, 3, 4, 6, 7];

//Более изощренные способы
// 1-ый способ (самый примитивный, просто переписать массив :))))
const newArrayFirst = [1, 2, 3, 4, 6, 7];
newArrayFirst[0] = 999999999;

// 2-ой способ.
const newArraySecond = [];
for (let i = 0; i < firstArray.length; i++) {
    newArraySecond.push(firstArray[i]);
}
newArraySecond[0] = 9999999;

// 3-ой способ.
const newArrayThird = [];
newArrayThird.length = firstArray.length;
for (let i = 0; i < newArrayThird.length; i++) {
    newArrayThird[i] = firstArray[i];
}

newArrayThird[0] = 9999999;

// 4-ой способ.
const newArray4 = [];
for (let i = 0; i < firstArray.length; i++) {
    newArray4[i] = firstArray[i];
}
newArray4[0] = 9999999;

//Более нормальные способы:
// 1-ый способ
const newGoodArrayFirst = [...firstArray];
newGoodArrayFirst[0] = 999999;

// 2-ой способ

const newGoodArraySecond = Array.from(firstArray);

newGoodArraySecond[0] = 999999999;
console.log(firstArray);
