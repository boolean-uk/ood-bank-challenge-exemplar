const Account = require('./account'); 

const { statementVars } = require('./utils/vars')

class Statement {

    #account

    constructor(account) {
        this.#account = account;
    }

    /**
     * 
     * @returns 
     * date || credit || debit || balance
     * 14/01/2012 ||  || 500.00 || 2500.00
     * 13/01/2012 || 2000.00 ||  || 3000.00
     * 10/01/2012 || 1000.00 ||  || 1000.00
     */
    print() {

        const txs = this.#account?.getTransactions()
        if (txs) {

            let balance = 0
            const delimiter = statementVars.delimiter

            const lines = txs.map(line => {
                balance += line.amount
                const thisLine = line.amount >= 0 ? 
                    `${line.date}${delimiter}${(line.amount).toFixed(2)}${delimiter}${delimiter}${balance.toFixed(2)}` : 
                    `${line.date}${delimiter}${delimiter}${(line.amount * -1).toFixed(2)}${delimiter}${balance.toFixed(2)}`
                return thisLine
            }).reverse()

            lines.unshift(statementVars.columns.join(delimiter))
            
            return lines.join('\n')
        }
        return ''
    }
}

module.exports = Statement;
