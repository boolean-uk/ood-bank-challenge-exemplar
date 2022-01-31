const Account = require('../src/account')
const StatementPrinter = require('../src/statement-printer')
const StatementTransaction = require('../src/statement-transaction')
const { TRANSACTION_TYPES } = require('../src/transaction')

describe('StatementPrinter', () => {
  it('accepts an account as a argument', () => {
    const account = new Account()
    const printer = new StatementPrinter(account)
    expect(printer.account).toEqual(account)
  })
  it('can generate StatementTransactions', () => {
    const account = new Account()
    const printer = new StatementPrinter(account)
    account.newTransaction(TRANSACTION_TYPES.CREDIT, 1000)
    account.newTransaction(TRANSACTION_TYPES.DEBIT, 1000)
    const expected = [
      new StatementTransaction(
        account.transactions[0].date,
        '-',
        1000,
        0,
      ),
      new StatementTransaction(
        account.transactions[0].date,
        1000,
        '-',
        1000,
      ),
    ]
    const result = printer.generateStatementTransactions()
    expect(result).toEqual(expected)
  })
})
