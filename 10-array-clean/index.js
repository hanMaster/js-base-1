const toDelete = (num) => num > 7;

const numbers = [2, 7, 3, 23, 5, 8, 67];

const filter = (arr, cb) => {
    const res = [];
    for (const el of arr) {
        if (!cb(el)) {
            res.push(el);
        }
    }
    return res;
};

console.log(filter(numbers, toDelete));
