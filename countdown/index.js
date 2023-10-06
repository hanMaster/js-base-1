const arr = ['!', 'JS', 'люблю', 'Я'];

const reversed = [];
for (let i = arr.length - 1; i > -1; i--) {
    reversed.push(arr[i]);
}

console.log(reversed.join(' '));
