const Transaction = require("../src/Transaction.js")
const TransactionHistory = require("../src/TransactionHistory.js")
const Statement = require("../src/Statement.js")

describe("Bank challenge", () => {
  it("shows correct balance", () => {
    const expected =
`date || credit || debit || balance
14/01/2012 ||  || 500.00 || 2500.00
13/01/2012 || 2000.00 ||  || 3000.00
10/01/2012 || 1000.00 ||  || 1000.00`
    const transactionHistory = new TransactionHistory()
    transactionHistory.add(new Transaction({type: "credit", amount: 1000, date: "10-01-2012"}))
    transactionHistory.add(new Transaction({type: "credit", amount: 2000, date: "13-01-2012"}))
    transactionHistory.add(new Transaction({type: "debit", amount: 500, date: "14-01-2012"}))
    const statement = Statement.generateFrom(transactionHistory.transactions)

    expect(statement.toString()).toEqual(expected)
  })
})
