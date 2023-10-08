'use strict';
/*
Создайте объект пользователя с паролем.
С помощью функции ниже удалить пароль сделав
функцию сброса пароля
*/

function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    name: 'Вася',
    password: 'qwerty',
};

const removeUserPassword = removePassword.bind(user, true);

removeUserPassword();

console.log(user);
