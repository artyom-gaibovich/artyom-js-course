//2. Перепиши все на стрелочную функцию (включая замыкания)
/*function power(pow) {
    return function(pow) {
        return num ** pow;
    };
}
*/

const power = pow => num => num ** pow;
