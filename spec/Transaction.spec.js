const Transaction = require('../src/Transaction')

describe('Transaction', () => {
    it('should be compatible with date strings and objects', () => {
        const today = new Date();

        const objectTransaction = new Transaction(0, today);
        const stringTransaction = new Transaction(0, today.toISOString());

        expect(objectTransaction.date).toEqual(today);
        expect(stringTransaction.date).toEqual(today);
    })
})
