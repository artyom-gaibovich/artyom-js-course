/*2. flatMap: Дан массив строк ["Hello world", "Goodbye moon", "JavaScript is fun"].
Преобразуй его в массив слов (разделенных по пробелам), затем удали слова короче 4 символов.
 */
function callBArr (value) {
    return value.split(" ").filter(word => word.length <= 4);
}
let strArr =  ["Hello world", "Goodbye moon", "JavaScript is fun"].flatMap(callBArr);
console.log(strArr);