'use strict';

const doCalc = (el) => {
    const op1 = Number(document.querySelector('#op1').value || 0);
    const op2 = Number(document.querySelector('#op2').value || 0);
    const result = document.querySelector('.result');

    switch (el.dataset.op) {
        case '+':
            result.innerText = op1 + op2;
            break;
        case '-':
            result.innerText = op1 - op2;
            break;
        case '*':
            result.innerText = op1 * op2;
            break;
        case '/':
            if (op2 === 0) {
                result.innerText = 'NaN';
                break;
            }
            result.innerText = op1 / op2;
    }
};
