//5.  Измени значение A, с помощью фунцкии c
function a() {
    let A = 0;
    return function b() {
        return function c() {
            A = 100;
            console.log(A);
        };
    };
}
const e = a();
const cFunc = e();
cFunc();