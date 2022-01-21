const Transaction = require('../src/Transaction');
const Account = require('../src/Account');
const Statement = require('../src/Statement');
const StatementLine = require('../src/StatementLine')

describe('Statement', () => {
    it('should sort transactions in descending order', () => {
        const transactions = [
            new Transaction(1000, '01/10/2012'),
            new Transaction(2000, '01/13/2012'),
            new Transaction(-500, '01/14/2012')
        ];

        const statement = new Statement(new Account(transactions));

        const expectedLines = [
            new StatementLine(new Date('01/14/2012'), '', 500, 2500),
            new StatementLine(new Date('01/13/2012'), 2000, '', 3000),
            new StatementLine(new Date('01/10/2012'), 1000, '', 1000)
        ];

        expect(statement.generate()).toEqual(expectedLines);
    })
})