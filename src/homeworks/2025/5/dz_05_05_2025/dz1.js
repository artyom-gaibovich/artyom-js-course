//У этого объекта нужно реализовать методы
const wallet = {
    balance : 0,
    transactions: [],
    increase({ sum, reason }) {
        this.balance += sum;
        this.transactions.push({
            sum,
            reason
        })
        return true;
    },
    decrease({sum, reason}) {
        if (this.balance < sum) {
            return false;
        }
        this.balance -= sum;
        this.transactions.push({
            sum, reason
        })
        return true;
    },
    getOpsLength() {
        return this.transactions.length
    }
}

wallet.increase({
    reason: 'Налоги',
    sum: 200,
})

console.log(wallet.getOpsLength())