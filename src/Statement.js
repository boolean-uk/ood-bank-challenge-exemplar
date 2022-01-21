const StatementLine = require("./StatementLine");

class Statement {
    constructor(account) {
        this._account = account;
    }

    generate() {
        let balance = 0;

        return this._account.transactions
            .map(tx => {
                balance += tx.amount;

                if (tx.amount >= 0) {
                    return new StatementLine(tx.date, tx.amount, '', balance);
                }

                return new StatementLine(tx.date, '', tx.amount * -1, balance);
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
}

module.exports = Statement;
