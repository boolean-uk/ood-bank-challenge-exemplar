const Transaction = require("./transcation");

class Account {
  constructor(startingBalance) {
    this.startingBalance = startingBalance === undefined ? 0 : startingBalance
    this.transactions = []
  }

  getBalance() {
    let balance = this.startingBalance
    for(var t = 0; t < this.transactions.length; t++) {
      if(this.transactions[t].type === 'credit') {
        balance += this.transactions[t].amount
      }
      else if(this.transactions[t].type === 'debit') {
        balance -= this.transactions[t].amount
      }
    }
    return balance
  }

  deposit(amount) {
    let transaction = null;
    if(amount > 0) {
      transaction = new Transaction(new Date(), amount, 'credit')
      this.transactions.push(transaction)
    }
    return transaction;
  }

  canWidthdraw(amount) {
    const currentBalance = this.getBalance()
    const newBalance = currentBalance - amount
    return (newBalance >= 0)
  }

  withdraw(amount) {
    let transaction = null
    if(amount > 0 && this.canWidthdraw(amount)) {
      transaction = new Transaction(new Date(), amount, 'debit')
      this.transactions.push(transaction)
    }
    return transaction
  }
}

module.exports = Account