const Transaction = require('../src/transaction.js')

class Account {

    #transactions
    #balance

    constructor() {
        this.#transactions = [];
        this.#balance = 0;
    }

    addTransaction(amount, date) {
        const transaction = new Transaction(amount, date)
        this.#balance += amount
        this.#transactions.push(transaction);
    }

    getTransactions() {
        return this.#transactions.map(tx => {
            return {
                amount: tx.getAmount(),
                date: tx.getDate()
            }
        })
    }

    getBalance() {
        return this.#balance
    }
}

module.exports = Account;
