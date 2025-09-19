/*5) Напиши программу, которая умеет строить таблицу умножения:
    - Допустим передали totalRows = 7, totalNumbers = 5
Программ выведет:
    ```
  1)
  1 * 1 = 1
  1 * 2 = 2
   ...........
   1* 5 = 5
   2)
   ...........
   3)
   ...........
   .............
   7)
   7 * 1 = 7
   7*2 = 14
   .............
   7 * 5 = 35
 */

function tableOfMultiplication(totalRows, totalNumbers){
    for (let i = 1; i <= totalRows; i++) {
        console.log(i + ')');
        for (let j = 1; j <= totalNumbers; j++) {
            console.log(`  ${i} * ${j} = ${i * j}`);
        }
    }
}

tableOfMultiplication(7,5)
