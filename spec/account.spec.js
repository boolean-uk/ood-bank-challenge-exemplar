const Account = require('./../src/account')


describe("Acocunt class", function() {
  it("should accept valid deposit", () => {
    let account = new Account()
    let depositAmount = 100;

    let transaction = account.deposit(depositAmount)

    expect(transaction).not.toBeNull()
    expect(transaction.amount).toEqual(depositAmount)
    expect(transaction.type).toEqual('credit')
    expect(transaction.date.toLocaleDateString()).toBe(new Date().toLocaleDateString());
  })

  it("should not accept a negative or zero deposit", () => {
    let account = new Account()

    expect(account.deposit(-1)).toBeNull()
    expect(account.deposit(0)).toBeNull()
  })
})