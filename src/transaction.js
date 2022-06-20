const { txVars } = require('./utils/vars')

class Transaction {

    #amount
    #date

    constructor(amount, date) {
        this.#amount = amount;
        this.#date = typeof date === 'string' ? new Date(date).toLocaleDateString(txVars.locale) : date;
    }

    getAmount() {
        return this.#amount;
    }

    getDate() {
        return this.#date;
    }
}

module.exports = Transaction;
