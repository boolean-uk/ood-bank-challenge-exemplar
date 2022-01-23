const Transaction = require('./../src/transcation');

describe("Transaction class", function() {
    it("should return invalid transaction with empty constructor", () => {
        const transaction = new Transaction();
        expect(transaction.amount).toBe(0);
        expect(transaction.date.toLocaleDateString()).toBe(new Date().toLocaleDateString());
        expect(transaction.type).toBe("");
        expect(transaction.isValid()).toBe(false);
    });
    it("should return invalid transaction with amount <=0", () => {
        const transaction = new Transaction(new Date(), 0, 'credit');
        expect(transaction.amount).toBe(0);
        expect(transaction.date.toLocaleDateString()).toBe(new Date().toLocaleDateString());
        expect(transaction.type).toBe("credit");
        expect(transaction.isValid()).toBe(false);
    });
    it("should return invalid transaction with type != credit or debit", () => {
        let transaction = new Transaction(new Date(), 10, '');
        expect(transaction.amount).toBe(10);
        expect(transaction.date.toLocaleDateString()).toBe(new Date().toLocaleDateString());
        expect(transaction.type).toBe('');
        expect(transaction.isValid()).toBe(false);

        transaction = new Transaction(new Date(), 10, 'asd');
        expect(transaction.amount).toBe(10);
        expect(transaction.date.toLocaleDateString()).toBe(new Date().toLocaleDateString());
        expect(transaction.type).toBe('');
        expect(transaction.isValid()).toBe(false);
    });
    it("should return valid transaction", () => {
        let transaction = new Transaction(new Date(), 10, 'credit');
        expect(transaction.amount).toBe(10);
        expect(transaction.date.toLocaleDateString()).toBe(new Date().toLocaleDateString());
        expect(transaction.type).toBe("credit");
        expect(transaction.isValid()).toBe(true);

        transaction = new Transaction(new Date(), 10, 'debit');
        expect(transaction.amount).toBe(10);
        expect(transaction.date.toLocaleDateString()).toBe(new Date().toLocaleDateString());
        expect(transaction.type).toBe("debit");
        expect(transaction.isValid()).toBe(true);

    });

    it("should return valid amount and date", () => {
        let transaction = new Transaction(new Date(), 10, 'credit');
        expect(transaction.getAmount()).toBe(10);
        expect(transaction.getType()).toBe('credit');
        expect(transaction.getDate().toLocaleDateString()).toBe(transaction.date.toLocaleDateString());
        expect(transaction.getDateString()).toBe(transaction.date.toLocaleDateString());
    });

});