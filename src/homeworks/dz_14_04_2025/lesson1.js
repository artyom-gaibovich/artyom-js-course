/*const newMyName = `Игорь Алексеевич "Лысый" Иванов`;

const name = newMyName.slice(0, newMyName.indexOf(' '));
const surname = newMyName.slice((newMyName.lastIndexOf(" ")) +1, (newMyName.length));

console.log(surname)
console.log(name)
*/
const firstNumber = "89141835356";
const secondNumber = "+79141835356";
const thirdNumber = "+7(914) 1835356";
const fourthNumber = "     +7(914) 1835356  ";
const fiveNumber = "     +7(914) 183-53-56   ";
const sixNumber = "+7 (914) 183-53-56";
const firstNumberWrong =  89143183;
const secondNumberWrong = "+7ввв(914)FFFFF183xxxx53-56";
const thirdNumberWrong = "+914)18353-56";
const fourthNumberWrong = "+89141ggg835356";


function isItAValidNumber(number) {

    number = String(number);



    const numNoSpace = number.replace(/ /g, "");


    const array = numNoSpace.split("");

    const allowedSymbols = "1234567890+()-";
    const wrongSymbols = array.filter(x => !allowedSymbols.includes(x));
    if (wrongSymbols.length > 0) {
        return false;
    }

    const digits = "1234567890";
    const digCheck = array.filter(x => digits.includes(x));
    const transformIntoStr = digCheck.join("");


    if (transformIntoStr.length !== 11) {
        return false;
    }


    if (transformIntoStr.startsWith("8") || transformIntoStr.startsWith("7")) {
        return true;
    } else {
        return false;
    }

}


console.log(isItAValidNumber(firstNumber));
console.log(isItAValidNumber(secondNumber));
console.log(isItAValidNumber(thirdNumber));
console.log(isItAValidNumber(fourthNumber));
console.log(isItAValidNumber(fiveNumber));
console.log(isItAValidNumber(sixNumber));
console.log(isItAValidNumber(firstNumberWrong));
console.log(isItAValidNumber(secondNumberWrong))
console.log(isItAValidNumber(thirdNumberWrong));
console.log(isItAValidNumber(fourthNumberWrong));
//Доделать





