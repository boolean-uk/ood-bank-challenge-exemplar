const Transaction = require('../src/transaction');

describe('Account tests', () => {
  it('makes one deposit', () => {
    // set up
    const expected = {
      date: '10/01/2012',
      credit: 1000,
      debit: 0,
      balance: 1000
    };
    // execute
    const result = new Transaction('10/01/2012', 1000, 0, 1000);
    // verify
    expect(result.date).toEqual(expected.date);
    expect(result.credit).toEqual(expected.credit);
    expect(result.debit).toEqual(expected.debit);
    expect(result.balance).toEqual(expected.balance);
  });
});
