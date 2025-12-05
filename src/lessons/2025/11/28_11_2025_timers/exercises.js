
const helloTimer = setTimeout(() => {console.log('Hello!');}, 3000);
console.log(helloTimer);

const twoArgTimer = setTimeout((arg1,arg2) => {console.log(arg1); console.log(arg2)}, 1000, 'a', 'b');
console.log(twoArgTimer);