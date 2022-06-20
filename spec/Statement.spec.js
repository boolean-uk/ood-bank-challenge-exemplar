const Statement = require("../src/Statement.js")
const StatementLine = require("../src/StatementLine.js")

describe("Statement", () => {
  let transaction, transaction2
  beforeEach(() => {
    transaction = {
      getDate: () => new Date("01-31-2022"),
      credit: () => "100.00",
      debit: () => "",
      value: () => 100
    }

    transaction2 = {
      getDate: () => new Date("02-04-2022"),
      credit: () => "",
      debit: () => "25.00",
      value: () => -25
    }
  })

  describe(".generateFrom()", () => {
    it("returns Statement instance with StatementLines", () => {
      const statement = Statement.generateFrom([transaction])
      expect(statement).toBeInstanceOf(Statement)
      statement.lines.forEach(line => {
        expect(line).toBeInstanceOf(StatementLine)
      })
    })
  })
  describe("#toString()", () => {
    it("creates and returns string version of statement including headers and balance", () => {
      const statement = Statement.generateFrom([transaction, transaction2])
      const expected =
`date || credit || debit || balance
04/02/2022 ||  || 25.00 || 75.00
31/01/2022 || 100.00 ||  || 100.00`

      expect(statement.toString()).toEqual(expected)
    })
  })

  describe("#headers()", () => {
    it("returns the headers row", () => {
      const statement = Statement.generateFrom([])
      expect(statement.headers()).toEqual("date || credit || debit || balance")
    })
  })
})
