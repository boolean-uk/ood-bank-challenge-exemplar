const Transaction = require("./src/Transaction.js")
const TransactionHistory = require("./src/TransactionHistory.js")
const Statement = require("./src/Statement.js")

const transactionHistory = new TransactionHistory()
transactionHistory.add(new Transaction({type: "credit", amount: 1000, date: "10-01-2012"}))
transactionHistory.add(new Transaction({type: "credit", amount: 2000, date: "13-01-2012"}))
transactionHistory.add(new Transaction({type: "debit", amount: 500, date: "14-01-2012"}))
const statement = Statement.generateFrom(transactionHistory.transactions)

console.log(statement.toString())
