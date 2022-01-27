const StatementLine = require('./StatementLine.js')
const DELIMITER = ' || '
const COLUMNS = ['date', 'credit', 'debit', 'balance']

class Statement {
  static generateFrom (transactions) {
    const lines = transactions.map(transaction => new StatementLine(transaction))
    return new Statement(lines)
  }

  constructor (lines) {
    this.lines = lines
  }

  toString () {
    let balance = 0
    const lines = this.lines.map(line => {
      balance += line.transaction.value()
      return line.toString(balance, DELIMITER)
    }).reverse()
    lines.unshift(this.headers())
    return lines.join('\n')
  }

  headers () {
    return COLUMNS.join(DELIMITER)
  }
}

module.exports = Statement
