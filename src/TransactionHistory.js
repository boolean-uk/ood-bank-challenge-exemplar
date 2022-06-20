class TransactionHistory {
  constructor () {
    this.transactions = []
  }

  add (transaction) {
    this.transactions.push(transaction)
  }
}

module.exports = TransactionHistory
