const wallet = {
    balance: 0,
    operations: [],
    income: function (sum, reason) {
        this.operations.push({
            reason,
            sum,
        });
    },
    spend: function (sum, reason) {
        this.operations.push({
            reason,
            sum: -sum,
        });
    },
    operationsCount() {
        return this.operations.length;
    },
};

wallet.income(20, 'Заказ на фрилансе');
wallet.spend(2, 'Купил доширак');

console.log('Количество операций:', wallet.operationsCount());

console.log(wallet);
