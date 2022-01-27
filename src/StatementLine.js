class StatementLine {
  constructor (transaction) {
    this.transaction = transaction
  }

  toString (balance, delimiter) {
    return [
      this.transaction.getDate().toLocaleDateString(),
      this.transaction.credit(),
      this.transaction.debit(),
      balance.toFixed(2)
    ].join(delimiter)
  }
}

module.exports = StatementLine
