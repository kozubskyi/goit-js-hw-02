// 'use strict';

let total = 0;

while (true) {
  const numbers = [];
  let input = prompt('Введіть число');

  if (input === null) {
    break;
  }

  input = Number(input);

  // if (input === NaN) {
  //   alert('Було написано не число, спробуйте ще раз');
  //   continue;    
  // }
  // Почему код выше не работает?

  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Було написано не число, спробуйте ще раз');
    continue;
  }

  numbers.push(input);

  for (const number of numbers) {
    total += number;
  }
  // for (let i = 0; i < numbers.length; i += 1) {
  //   total += numbers[i];
  // }
}

console.log(`Загальна сума чисел дорівнює ${total}`);
alert(`Загальна сума чисел дорівнює ${total}`);