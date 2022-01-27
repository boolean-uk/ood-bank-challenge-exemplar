const { parseDateDMY } = require('./dateFormat.js')

class Transaction {
  constructor (data, parseDate = parseDateDMY) {
    this.type = data.type
    this.amount = data.amount
    this.date = parseDate(data.date)
  }

  getDate () {
    return this.date
  }

  credit () {
    return (this.type === 'credit') ? this.amount.toFixed(2) : ''
  }

  debit () {
    return (this.type === 'debit') ? this.amount.toFixed(2) : ''
  }

  value () {
    return (this.type === 'credit') ? this.amount : -this.amount
  }
}

module.exports = Transaction
