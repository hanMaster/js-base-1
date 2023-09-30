const prices = [
    [100, 200],
    [120, 100],
    [200, 350],
];

console.log(prices.map((i) => i[1] - i[0]).filter((i) => i > 0));
