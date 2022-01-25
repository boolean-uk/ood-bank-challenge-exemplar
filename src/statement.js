
const StatementLine = require('./statementline')

class Statement {
  constructor(account) {
    this.statementLines = []

    const sortedTransactions = account.transactions.sort((left, right) => {
      return left.date - right.date
    })

    let currentBalance = account.startingBalance
    for(var t = 0; t < sortedTransactions.length; t++) {
      let balanceAfterTransaction = currentBalance
      if(sortedTransactions[t].type === 'credit') {
        currentBalance += sortedTransactions[t].amount
      }
      else if(sortedTransactions[t].type === 'debit') {
        currentBalance -= sortedTransactions[t].amount
      }
      this.statementLines.push(new StatementLine(sortedTransactions[t], currentBalance))
    }
    // reverse the lines
    this.statementLines = this.statementLines.reverse()
  }

  getStatementLines() {
    return this.statementLines
  }

  print() {
    console.table(this.statementLines, ["date", 'credit', 'debit', 'balance'])
  }
}

module.exports = Statement