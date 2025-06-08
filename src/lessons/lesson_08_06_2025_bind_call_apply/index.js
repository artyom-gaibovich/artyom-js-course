console.log('hello world')

/**
 *
 * @param {number} n
 * @returns {number[][]}
 */
function createMatrix(n){
    const matrix = [];
    let c = 0;
    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j =1; j <= n * 2; j++){
            row.push(c);

            c+=3

        }
        matrix.push(row);
    }
    return matrix;
}
createMatrix(3)
/**
 * n = 3
 * return [
 * 		[0,3,6,9, 12, 15],
 * 		[18,21,24,27, 30, 33],
 * 		[36,39,42,45, 48, 51],
 * 	]
 *
 * n = 2
 * return [
 * 		[0,3,6,9],
 * 		[12, 15, 18, 21]
 * 	]
 */
