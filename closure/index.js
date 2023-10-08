'use strict';

/* 
    Сделать функию пользователя которая берет за основу userInfo 
    и за счет замыкания создает новый объект, 
    с которым можно работать как user1().increase(100) 
*/

const userInfo = {
    balance: 0,
    operations: 0,
    increase(sum) {
        this.balance += sum;
        this.operations++;
    },
};

function newUser() {
    const user = { ...userInfo };
    return function () {
        return user;
    };
}

const user1 = newUser();
user1().increase(100);

const user2 = newUser();
user2().increase(200);

console.log('User 1: ', user1());
console.log('User 2: ', user2());
