class Printer {
  print(account) {
    console.table(account.statement);
    return account;
  }
}

module.exports = Printer;
