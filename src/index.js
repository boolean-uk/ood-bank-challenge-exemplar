// run this file in the terminal with node src/inde.js
// this will check if the console.table is printing out as expected

const Account = require('../src/account');
const account = new Account();
account.transact('10/01/2012', 1000, 0);
account.transact('11/01/2012', 0, 500);

const Printer = require('../src/printer');
const printer = new Printer();
printer.print(account);
