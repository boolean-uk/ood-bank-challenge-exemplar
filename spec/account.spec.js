const Account = require('./../src/account')


describe("Account class", function() {
  it("should accept valid deposit", () => {
    let account = new Account()
    let depositAmount = 100;

    // check starting balance
    let currentBalance = account.getBalance()
    expect(currentBalance).toEqual(0)
    
    let transaction = account.deposit(depositAmount)

    expect(transaction).not.toBeNull()
    expect(transaction.amount).toEqual(depositAmount)
    expect(transaction.type).toEqual('credit')
    expect(transaction.date.toLocaleDateString()).toBe(new Date().toLocaleDateString());

    currentBalance = account.getBalance()
    expect(currentBalance).toEqual(depositAmount)

  })

  it("should not accept a negative or zero deposit", () => {
    let account = new Account()

    expect(account.deposit(-1)).toBeNull()
    expect(account.deposit(0)).toBeNull()
  })

  it("should accept valid withdrawal if enough cash", () => {
    const startingBalance = 70
    const withdrawAmount = 60;
    const account = new Account(startingBalance)

    // check starting balance
    let currentBalance = account.getBalance()
    expect(currentBalance).toEqual(startingBalance)

    // perform 1 valid withdrawal
    let transaction = account.withdraw(withdrawAmount)

    expect(transaction).not.toBeNull()
    expect(transaction.amount).toEqual(withdrawAmount)
    expect(transaction.type).toEqual('debit')
    expect(transaction.date.toLocaleDateString()).toBe(new Date().toLocaleDateString());

    currentBalance = account.getBalance()
    expect(currentBalance).toEqual(startingBalance - withdrawAmount)
  })

  it("should not accept a negative or zero withdrawal", () => {
    let startingBalance = 100
    let account = new Account(startingBalance)

    expect(account.withdraw(-1)).toBeNull()
    expect(account.withdraw(0)).toBeNull()
  })

  it("should not withdraw if not enough balance", () => {
    let startingBalance = 100
    let account = new Account(startingBalance)

    expect(account.withdraw(2000)).toBeNull()
  })
})