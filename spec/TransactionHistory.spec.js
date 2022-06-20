const TransactionHistory = require('../src/TransactionHistory.js')

describe("TransactionHistory", () => {
  describe("#add()", () => {
    it("adds items to array", () => {
      const history = new TransactionHistory()
      expect(history.transactions.length).toEqual(0)
      history.add("transaction1")
      history.add("transaction2")
      expect(history.transactions.length).toEqual(2)
      expect(history.transactions.includes("transaction1")).toEqual(true)
      expect(history.transactions.includes("transaction2")).toEqual(true)
    })
  })
})
