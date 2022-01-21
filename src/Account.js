class Account {
    constructor(transactions = []) {
        this._transactions = transactions;
    }

    get transactions() {
        return this._transactions;
    }

    addTransaction(transaction) {
        this._transactions.push(transaction);
    }

    get balance() {
        return this._transactions.reduce((a, b) => a + b.amount, 0);
    }
}

module.exports = Account;
