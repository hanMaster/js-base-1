const wallet = {
    balance: 0,
    operations: [],
    income: function (sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason,
            sum,
        });
        return true;
    },
    spend: function (sum, reason) {
        if (sum > this.balance) {
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason,
            sum: -sum,
        });
        return true;
    },
    operationsCount() {
        return this.operations.length;
    },
};

wallet.income(20, 'Заказ на фрилансе');
wallet.spend(2, 'Купил доширак');

console.log('Количество операций:', wallet.operationsCount());

console.log(wallet);
