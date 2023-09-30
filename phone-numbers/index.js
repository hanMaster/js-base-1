/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';
const num5Error = '6(910) 323-53-56';

const isRuPhoneNumber = (num) => {
    let res = num.trim();
    if (res.indexOf('+7') === 0) {
        res = res.replace('+7', '8');
    }

    if (res[0] !== '8') {
        return false;
    }

    res = res.replace('(', '');
    res = res.replace(')', '');
    res = res.replace(/-/g, '');
    res = res.replace(/ /g, '');

    if (res.length !== 11) {
        return false;
    }

    for (const ch of res) {
        if (isNaN(Number(ch))) {
            return false;
        }
    }

    return true;
};

console.log(`${num1} ${isRuPhoneNumber(num1)}`);
console.log(`${num2} ${isRuPhoneNumber(num2)}`);
console.log(`${num3} ${isRuPhoneNumber(num3)}`);
console.log(`${num4} ${isRuPhoneNumber(num4)}`);
console.log(`${num5} ${isRuPhoneNumber(num5)}`);
console.log('============================');
console.log(`${num1Error} ${isRuPhoneNumber(num1Error)}`);
console.log(`${num2Error} ${isRuPhoneNumber(num2Error)}`);
console.log(`${num3Error} ${isRuPhoneNumber(num3Error)}`);
console.log(`${num4Error} ${isRuPhoneNumber(num4Error)}`);
console.log(`${num5Error} ${isRuPhoneNumber(num5Error)}`);
