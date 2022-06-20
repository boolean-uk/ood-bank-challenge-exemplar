const Account = require('../src/account');
const Statement = require('../src/statement');

describe('Account', () => {
    let account = null;

    beforeEach(() => {
        account = new Account();
    })

    it('adds new transactions', () => {

        const expected = [
            {
                amount: 10.00,
                date: new Date
            },
            {
                amount: 20.00,
                date: new Date
            }
        ]

        account.addTransaction(expected[0].amount, expected[0].date)
        account.addTransaction(expected[1].amount, expected[1].date)

        const result = account.getTransactions()
        expect(result).toEqual(expected);
    });

    it('gets correct balance', () => {

        let expected = 0

        const transactions = [
            {
                amount: 100.00,
                date: new Date
            },
            {
                amount: 200.00,
                date: new Date
            },
            {
                amount: -100.00,
                date: new Date
            }
        ]

        for (const tx of transactions) {
            account.addTransaction(tx.amount, tx.date)
            expected += tx.amount
        }

        const result = account.getBalance()
        expect(result).toEqual(expected);
    });
        
    it('generates correct statement', () => {
        const expected =
`date || credit || debit || balance
14/01/2012 ||  || 500.00 || 2500.00
13/01/2012 || 2000.00 ||  || 3000.00
10/01/2012 || 1000.00 ||  || 1000.00`

        const transactions = [
            {
                amount: 1000.00,
                date: '01/10/2012'
            },
            {
                amount: 2000.00,
                date: '01/13/2012'
            },
            {
                amount: -500.00,
                date: '01/14/2012'
            }
        ]

        for (const tx of transactions) {
            account.addTransaction(tx.amount, tx.date)
        }

        const statement = new Statement(account)
        const printOut = statement.print()
    
        expect(printOut).toEqual(expected)
    })
})