let obj = {x: 5, y: 2, z: 3};



let obj2 = {
    ...obj,
    x: obj.x**2,
    y: obj.y +100,
};
let obj3 = obj;
obj3.x = obj3.x**2;



console.log(obj);
console.log(obj3);

const emptyMass = {};
emptyMass.age = 5;
emptyMass.name = "Ivan"
console.log(emptyMass);

const headers = {
    "date": new Date() + 0,
    "expires": new Date() + 1,
    "server": 'Express',
    "content-type": 'text/plain',
    "set-cookie": "SIDCC=AKEyXzUpxvxXxeMj8x_EPWX-f2q51DbsdKxflMZDmCT7FxMaOzYR61NeuPuMOptk_qLKKvaBKKBq; expires=Mon, 23-Feb-2026 13:55:55 GMT; path=/; domain=.google.com; priority=high"
}
let keys = Object.keys(headers);
console.log(keys);

console.log(keys.length);