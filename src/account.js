const Transaction = require('./transaction');

class Account {
  constructor() {
    this.statement = [];
    this.balance = 0;
  }

  transact(date, credit, debit) {
    this.balance = this.balance + credit - debit;
    const tran = new Transaction(date, credit, debit, this.balance);
    this.statement.unshift(tran);
    return this.statement;
  }
}

module.exports = Account;
