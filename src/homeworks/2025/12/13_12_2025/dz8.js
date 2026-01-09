const a = new Date(2024, 5, 10,10,30)
const c = new Date(2024, 5, 11)
function isEarlier(d1, d2){
    return d1 < d2;
}

console.log(isEarlier(a, c))