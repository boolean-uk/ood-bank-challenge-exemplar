
class StatementLine {
  constructor (transaction, balanceAfterTransaction) {
    this.date = transaction.date.toLocaleDateString()
    if (transaction.type === 'credit') {
      this.credit = transaction.type === 'credit' ? transaction.amount : undefined
    }
    if (transaction.type === 'debit') {
      this.debit = transaction.type === 'debit' ? transaction.amount : undefined
    }
    this.balance = balanceAfterTransaction
  }
}

module.exports = StatementLine
