const Account = require('../src/account')
const {
  Transaction,
  TRANSACTION_TYPES,
} = require('../src/transaction')

describe('Account', () => {
  let account

  beforeEach(() => {
    account = new Account()
  })

  it('can be created with an empty transaction list', () => {
    expect(account.transactions.length).toEqual(0)
  })
  it('can create a new transaction and add it to the list', () => {
    const expected = new Transaction(
      TRANSACTION_TYPES.CREDIT,
      1000,
      new Date(),
      1000,
    )

    const result = account.newTransaction(
      expected.type,
      expected.amount,
    )

    expect(result).toEqual(expected)
    expect(account.transactions.length).toEqual(1)
  })
})
