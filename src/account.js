const { Transaction, TRANSACTION_TYPES } = require('./transaction')

class Account {
  constructor() {
    this.transactions = []
    this.balance = 0
  }

  newTransaction(type, amount) {
    this.updateBalance(type, amount)
    const transaction = new Transaction(
      type,
      amount,
      new Date(),
      this.balance,
    )
    this.transactions.push(transaction)
    return transaction
  }

  updateBalance(type, amount) {
    switch (type) {
      case TRANSACTION_TYPES.CREDIT:
        this.balance += amount
        break
      case TRANSACTION_TYPES.DEBIT:
        this.balance -= amount
        break
      default:
        throw new Error('Invalid transaction type')
    }
  }
}

module.exports = Account
