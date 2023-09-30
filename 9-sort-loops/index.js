const arr = [1, 40, -5, 10, 0];

// direction: ASC or DESC

function sortArray(array, direction) {
    const src = [...array];
    const res = [];
    while (src.length) {
        let tmp = src[0];
        for (const el of src) {
            if (direction === 'ASC' ? el < tmp : el > tmp) {
                tmp = el;
            }
        }
        res.push(tmp);
        src.splice(src.indexOf(tmp), 1);
    }
    return res;
}

console.log(sortArray(arr, 'ASC'));
console.log(sortArray(arr, 'DESC'));
