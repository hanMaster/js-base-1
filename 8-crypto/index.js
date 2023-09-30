console.log('Check encrypted password');

function crypt(password) {
    return password
        .split('')
        .reverse()
        .map((ch) => ch.charCodeAt(0) ^ 7)
        .map((code) => String.fromCharCode(code))
        .join('');
}

function check(encrypted, original) {
    return crypt(original) === encrypted;
}

console.log(check('lskcjjuv', 'password'));
console.log(check('cuhpttfw', 'password'));
