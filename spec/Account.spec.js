const Account = require('../src/Account');
const Transaction = require('../src/Transaction');

describe('Account', () => {
    let transactions = null;
    let account = null;

    beforeEach(() => {
        transactions = [new Transaction(10, new Date), new Transaction(20, new Date)];
        account = new Account(transactions);
    })

    it('should add new transactions to the end', () => {
        expect(account.transactions).toEqual(transactions);

        const newTransaction = new Transaction(30, new Date);

        account.addTransaction(newTransaction);

        expect(account.transactions[account.transactions.length - 1]).toEqual(newTransaction);
    });
})