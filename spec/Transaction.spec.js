const Transaction = require("../src/Transaction.js")

describe("Transaction", () => {
  let transactionCredit, transactionDebit, mockParser

  beforeEach(() => {
    mockParser = () => "date"
    transactionCredit = new Transaction({type: "credit", amount: 1000, date: "10-01-2012"}, mockParser)
    transactionDebit = new Transaction({type: "debit", amount: 200, date: "11-01-2012"}, mockParser)
  })
  describe("#getDate()", () => {
    it("returns string version for date", () => {
      expect(transactionCredit.getDate()).toEqual("date")
    })

    describe("credit transactions", () => {
      it("return credit value", () => {
        expect(transactionCredit.credit()).toEqual("1000.00")
      })
      it("return no debit value", () => {
        expect(transactionCredit.debit()).toEqual("")
      })
      it("return positive value", () => {
        expect(transactionCredit.value()).toEqual(1000)
      })
    })
    describe("debit transactions", () => {
      it("return no credit value", () => {
        expect(transactionDebit.credit()).toEqual("")
      })
      it("return debit value", () => {
        expect(transactionDebit.debit()).toEqual("200.00")
      })
      it("return negative value", () => {
        expect(transactionDebit.value()).toEqual(-200)
      })
    })
  })
})
