

class Transaction {
    constructor(date, amount, type, balanceAfterTransaction) {
        this.date = date === undefined ? new Date() : date;
        this.amount = (amount === undefined || amount <= 0) ? 0 : amount;
        this.type = (type !== 'credit' && type !== 'debit') ? '' : type;
    }

    isValid() {
        let validTransaction = true;
        if(this.type !== "credit" && this.type !== "debit") {
            validTransaction = false;
        }
        if(isNaN(this.date)) {
            validTransaction = false;
        }
        if(this.amount <= 0) {
            validTransaction = false;
        }
        return validTransaction;
    }

    getAmount() {
        return this.amount;
    }

    getDate() {
        return this.date;
    }

    getDateString() {
        return this.date.toLocaleDateString();
    }

    getType() {
        return this.type
    }

};

module.exports = Transaction;