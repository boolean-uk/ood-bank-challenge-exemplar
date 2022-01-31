const {
  Transaction,
  TRANSACTION_TYPES,
} = require('../src/transaction')

describe('Transaction types', () => {
  it('has a credit transaction', () => {
    expect(TRANSACTION_TYPES.CREDIT).toEqual('credit')
  })
  it('has a debit transaction', () => {
    expect(TRANSACTION_TYPES.DEBIT).toEqual('debit')
  })
})

describe('Transaction', () => {
  it('has a type, amount, and date', () => {
    const expected = {
      type: 'WITHDRAW',
      amount: 1500,
      date: '26/01/2022',
      balance: 0,
    }

    const result = new Transaction(
      expected.type,
      expected.amount,
      expected.date,
      expected.balance,
    )

    expect(result.type).toEqual(expected.type)
    expect(result.getType()).toEqual(expected.type)
    expect(result.amount).toEqual(expected.amount)
    expect(result.getAmount()).toEqual(expected.amount)
    expect(result.date).toEqual(expected.date)
    expect(result.getDate()).toEqual(expected.date)
    expect(result.balance).toEqual(expected.balance)
    expect(result.getBalance()).toEqual(expected.balance)
  })
})
