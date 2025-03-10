/**
 * Почему нельзя делать разнородные элементы коллекции?
 */


const users = [{
    username: 'John', surname: 'Doe', age: 20, child: [{
        username: 'John 2 Child', surname: 'Doe', age: 20, child: []
    }]
}, 'Это какая-то рандомная строка', {
    username: 'John', surname: 'Doe 2', age: 20, child: [{
        username: 'John 2 Child', surname: 'Doe', age: 20, child: []
    }]
}, {
    username: 'John', surname: 'Doe 3', age: 20, child: [{
        username: 'John 2 Child', surname: 'Doe', age: 20, child: []
    }]
}];


const transformFunction = (users) => users.map(user => {
    user.username = user.username.toUpperCase() + '!!!'
    return user
});


/**
 * Муттабельность/иммутабельности
 */

// 54, 18 НОД(наибольший общий делитель)
    // НОД(54,12)
    // 54 = 4* 12 + 6
    // 12 = 2 * 6 + 0


const firstArray = [1, 2, 3, 4, 5, 6, 7];

const secondArray = Array.from(firstArray);

secondArray[0] = 99999;

const nod = (n, m) => {
    if (m !== 0) {
        const k = n % m;
        return nod(m, k);
    }
    return n;
};


/**
 * Шифрование
 */

/**
 * Односторонняя функция
 * 2^x mod 11
 */


/**
 * (сумма аргументов) mod 8
 */

const hashLength = 8;

const simpleHashFunction = (args) => {
    const hashValue = args.reduce((acc, cur) => acc + cur, 0) % hashLength;
    return hashValue;
}


const numsArray = 'Hello world!'.split('').map(el => el.charCodeAt())


// Function
function calcSumArgs(...args) {
    return args.reduce((acc, cur) => acc+cur,0);
}



// IFFE function
const resIFFE = function calcSumArgs(...args) {
    return args.reduce((acc, cur) => acc+cur,0);
}(50,50,50)


// Arrow function

const arrowFunction = (x) => {
    return x ** 2;
}



calcSumArgs(1,2,3)



const resAr = arrowFunction(10)

console.log(resAr)


const userNew = {
    username: 'Petya',
    funcDefault : function () {
        this.username = this.username + 'XXXX';
    },
    funcArrow : (a,b) => {
        return a + b;
    }
}



const userNewPetya2 = {
    username: 'Petya 2222',
    funcDefault : function () {
        this.username = this.username + 'XXXX';
    },
    funcArrow : (a,b) => {
        return a + b;
    }
}



const newFuncDefaultUnbound = userNew.funcDefault;


const newFuncDefaultBound = newFuncDefaultUnbound.bind(userNewPetya2);


newFuncDefaultBound()



userNew.funcDefault(10,20)

userNew.funcArrow(10,20)
