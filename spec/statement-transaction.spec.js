const moment = require('moment')
const StatementTransaction = require('../src/statement-transaction')

describe('StatementTransaction', () => {
  it('has the properties to display a statement', () => {
    const now = new Date()
    const dateString = moment(now).format('DD/MM/YYYY')
    const expected = {
      date: dateString,
      credit: 500,
      balance: 600,
    }
    const result = new StatementTransaction(
      now,
      expected.credit,
      undefined,
      expected.balance,
    )

    expect(result.date).toEqual(expected.date)
    expect(result.credit).toEqual(expected.credit)
    expect(result.debit).toEqual(expected.debit)
    expect(result.balance).toEqual(expected.balance)
  })
})
