const TRANSACTION_TYPES = {
  CREDIT: 'credit',
  DEBIT: 'debit',
}

class Transaction {
  constructor(type, amount, date, balance) {
    this.type = type
    this.amount = amount
    this.date = date
    this.balance = balance
  }

  getType() {
    return this.type
  }

  getAmount() {
    return this.amount
  }

  getDate() {
    return this.date
  }

  getBalance() {
    return this.balance
  }
}

module.exports = { Transaction, TRANSACTION_TYPES }
