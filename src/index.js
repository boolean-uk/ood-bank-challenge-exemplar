const Account = require('./account')

const startingBalance = 0
const account = new Account(startingBalance)

account.deposit(2000, new Date(2012, 0, 13))
account.deposit(1000, new Date(2012, 0, 10))
account.withdraw(500, new Date(2012, 0, 14))

const statement = account.statement()
statement.print()
