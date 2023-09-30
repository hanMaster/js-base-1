const card = '4561-2612-1234-5464';

const checkLuna = (c) => {
    let arr = c.split('-');
    if (arr.length !== 4) {
        return false;
    }
    for (const n of arr) {
        if (isNaN(Number(n))) {
            return false;
        }
    }
    const number = arr
        .join('')
        .split('')
        .map((i) => +i)
        .reduce((acc, value, idx) => {
            if (idx % 2 === 0) {
                let n = value * 2;
                if (n > 9) {
                    n -= 9;
                }
                return acc + n;
            }
            return acc + value;
        }, 0);
    return number % 10 === 0;
};

console.log(checkLuna(card));
