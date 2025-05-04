//У этого объекта нужно реализовать методы
const wallet = {
    balance : 0,
    transactions: []
}

function operation(walletObj, sum, reason) {
    if (walletObj.balance + sum < 0) {
        return false, "Ошибка! Недостаточно средств";
    }
    walletObj.balance += sum;
    walletObj.transactions.push({ reason, sum });
    return true, "Операция прошла!";
}

console.log(operation(wallet, 100, "Зарплата"));
console.log(operation(wallet, -50, "Еда"));
console.log(operation(wallet, -100, "Оплата"))
console.log(wallet.transactions);