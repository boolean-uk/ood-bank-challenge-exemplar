const moment = require('moment')

class StatementTransaction {
  constructor(date, credit, debit, balance) {
    this.date = moment(date).format('DD/MM/YYYY')
    this.credit = credit
    this.debit = debit
    this.balance = balance
  }

}

module.exports = StatementTransaction
