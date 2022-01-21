class Transaction {
    constructor(amount, date) {
        this._amount = amount;
        this._date = typeof date === 'string' ? new Date(date) : date;
    }

    get amount() {
        return this._amount;
    }

    get date() {
        return this._date;
    }
}

module.exports = Transaction;
