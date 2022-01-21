const Transaction = require('./Transaction');
const Account = require('./Account');
const Statement = require('./Statement');

const transactions = [
    new Transaction(1000, '01/10/2012'),
    new Transaction(2000, '01/13/2012'),
    new Transaction(-500, '01/14/2012')
];

const statement = new Statement(new Account(transactions));

console.table(statement.generate());