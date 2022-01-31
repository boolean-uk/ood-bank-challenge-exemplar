const Transaction = require('../src/transaction');
const Account = require('../src/account');

describe('Account tests', () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });

  it('makes one deposit', () => {
    // set up
    const expected = [new Transaction('10/01/2012', 1000, 0, 1000)];
    // execute
    const result = account.transact('10/01/2012', 1000, 0);
    // verify
    expect(result).toEqual(expected);
  });

  it('makes two deposits, a withdrawal', () => {
    // set up
    const expected = [
      new Transaction('14/01/2012', 0, 500, 2500),
      new Transaction('13/01/2012', 2000, 0, 3000),
      new Transaction('10/01/2012', 1000, 0, 1000)
    ];
    // execute
    account.transact('10/01/2012', 1000, 0);
    account.transact('13/01/2012', 2000, 0);
    const result = account.transact('14/01/2012', 0, 500);
    // verify
    expect(result).toEqual(expected);
  });
});
