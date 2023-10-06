const arr = [1, 40, -5, -7, 10, 0];

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

function sortWithTwoFor(array, direction) {
    const src = [...array];

    for (let i = 0; i < src.length - 1; i++) {
        for (let j = i; j < src.length; j++) {
            if (direction === 'ASC' ? src[i] > src[j] : src[i] < src[j]) {
                const tmp = src[i];
                src[i] = src[j];
                src[j] = tmp;
            }
        }
    }
    return src;
}
console.log('TwoFor');
console.log(sortWithTwoFor(arr, 'ASC'));
console.log(sortWithTwoFor(arr, 'DESC'));

function sortWithTwoForMy(array, direction) {
    const res = [];
    res.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        const el = array[i];
        if (direction === 'ASC' ? el < res[0] : el > res[0]) {
            res.unshift(el);
        } else if (direction === 'ASC' ? el > res[res.length - 1] : el < res[res.length - 1]) {
            res.push(el);
        } else {
            for (const idx in res) {
                if (direction === 'ASC' ? el < res[idx] : el > res[idx]) {
                    res.splice(idx, 0, el);
                    break;
                }
            }
        }
    }
    return res;
}

console.log('TwoForMy');
console.log(sortWithTwoForMy(arr, 'ASC'));
console.log(sortWithTwoForMy(arr, 'DESC'));