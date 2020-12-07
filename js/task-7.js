// 'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login < 4 || login > 16) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  }
  return true;
};

const isLoginUnique = function(allLogins, login) {
  for (let i = 0; i < logins.length; i += 1) {
    if (login === logins[i]) {
      console.log('Такой логин уже используется!');
      return false;
    }
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (login isValid && login isUnique) {
    logins.push(login);
    console.log('Логин успешно добавлен!');
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'