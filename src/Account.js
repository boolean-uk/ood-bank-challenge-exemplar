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
}

module.exports = Account;
