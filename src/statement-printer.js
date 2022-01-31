const StatementTransaction = require('./statement-transaction')
const { TRANSACTION_TYPES } = require('./transaction')

class StatementPrinter {
  constructor(account) {
    this.account = account
  }

  generateStatementTransactions() {
    const statements = []
    for (let i = this.account.transactions.length - 1; i >= 0; i--) {
      const action = this.account.transactions[i]
      let credit
      let debit
      if (action.type === TRANSACTION_TYPES.CREDIT) {
        credit = action.amount
        debit = '-'
      }
      if (action.type === TRANSACTION_TYPES.DEBIT) {
        debit = action.amount
        credit = '-'
      }

      statements.push(
        new StatementTransaction(
          action.date,
          credit,
          debit,
          action.balance,
        ),
      )
    }
    return statements
  }

  generateStatement() {
    const transactions = this.generateStatementTransactions()
    console.table(transactions)
  }
}

module.exports = StatementPrinter
