/* eslint-disable no-undef */
const StatementLine = require('../src/statementLine.js')

describe('StatementLine', () => {
  describe('#toString()', () => {
    it('returns string version for credit', () => {
      const balance = 100
      const delimiter = ','
      const transaction = {
        getDate: () => new Date('01-31-2022'),
        credit: () => '100.00',
        debit: () => ''
      }
      const statementLine = new StatementLine(transaction)
      expect(statementLine.toString(balance, delimiter)).toEqual('31/01/2022,100.00,,100.00')
    })

    it('returns string version for debit', () => {
      const balance = -100
      const delimiter = ','
      const transaction = {
        getDate: () => new Date('01-31-2022'),
        credit: () => '',
        debit: () => '100.00'
      }
      const statementLine = new StatementLine(transaction)
      expect(statementLine.toString(balance, delimiter)).toEqual('31/01/2022,,100.00,-100.00')
    })

    it('example with spies to assert methods are called', () => {
      const transactionSpy = {
        getDate: () => {},
        credit: () => {},
        debit: () => {}
      }
      spyOn(transactionSpy, 'getDate').and.returnValue(new Date('01-31-2022'))
      spyOn(transactionSpy, 'credit').and.returnValue('')
      spyOn(transactionSpy, 'debit').and.returnValue('100.00')

      const statementLine = new StatementLine(transactionSpy)
      const balance = -100
      const delimiter = ','

      statementLine.toString(balance, delimiter)

      expect(transactionSpy.getDate).toHaveBeenCalled()
      expect(transactionSpy.credit).toHaveBeenCalled()
      expect(transactionSpy.debit).toHaveBeenCalled()
    })
  })
})
