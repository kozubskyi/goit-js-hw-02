// 'use strict';

const logins = [];

const isLoginValid = function(login) {
  if (login < 4 || login > 16) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
};

const isLoginUnique = function(allLogins, login) {

};

const addLogin = function(allLogins, login) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'