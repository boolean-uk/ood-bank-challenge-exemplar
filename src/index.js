const Account = require('./account')
const StatementPrinter = require('./statement-printer')

const account = new Account()
account.newTransaction('credit', 10000)
account.newTransaction('debit', 50)

const printer = new StatementPrinter(account)
printer.generateStatement()
