const { parseDateDMY } = require('../src/dateFormat.js')

describe("dateFormat", () => {
  it("converts String dd-mm-yyyy to Date", () => {
    expect(parseDateDMY("10-01-2012")).toBeInstanceOf(Date)
  })

  it("converts date string to Date with correct day, month, year", () => {
    const date = new Date("2012", "0", "10")
    expect(parseDateDMY("10-01-2012")).toEqual(date)
  })
})
