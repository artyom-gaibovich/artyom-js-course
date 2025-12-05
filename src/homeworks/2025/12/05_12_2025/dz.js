const xtimer = setTimeout(() => {
    console.log('x')},  999999, );

console.log('A');
setTimeout(() => {
    console.log('B')},  0, );

console.log('C');
clearTimeout(xtimer);


