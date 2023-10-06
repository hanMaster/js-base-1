function convert(amount, currencyFrom, currencyTo) {
    switch (true) {
        case currencyFrom === 'rub' && currencyTo === 'usd':
            return amount / 97;
        case currencyFrom === 'rub' && currencyTo === 'eur':
            return amount / 102;
        case currencyFrom === 'usd' && currencyTo === 'eur':
            return amount * 0.95;
        case currencyFrom === 'eur' && currencyTo === 'usd':
            return amount * 1.0515;
        default:
            return null;
    }
}

console.log(`1000 rub = ${convert(1000, 'rub', 'usd').toFixed(2)} usd`);
console.log(`1000 rub = ${convert(1000, 'rub', 'eur').toFixed(2)} eur`);
console.log(`1000 usd = ${convert(1000, 'usd', 'eur').toFixed(2)} eur`);
console.log(`1000 eur = ${convert(1000, 'eur', 'usd').toFixed(2)} usd`);
