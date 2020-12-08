// 'use strict';

let total = 0;
const numbers = [];

while (true) {
  let input = prompt('Введіть число');

  if (input === null) {
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Було написано не число, спробуйте ще раз');
    continue;
  }

  numbers.push(input);
  console.log(numbers);

  for (const number of numbers) {
    total += number;
  }
}

console.log(`Загальна сума чисел дорівнює ${total}`);
alert(`Загальна сума чисел дорівнює ${total}`);