const Transaction = require("./transcation");

class Account {
  constructor() {
    this.transactions = []
  }

  deposit(amount) {
    let transaction = null;
    if(amount > 0) {
      transaction = new Transaction(new Date(), amount, 'credit')
    }
    return transaction;
  }
}

module.exports = Account