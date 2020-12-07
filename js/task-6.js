// 'use strict';

let total = 0;

while (true) {

  const numbers = [];
  let input = prompt('Введіть число');

  console.log(input);

  if (input === null) {
    break;
  }

  input = Number(input);
  numbers.push(input);
  console.log(numbers);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('Було написано не число, спробуйте ще раз');
    continue;
  }

  // for (const number of numbers) {
  //   total += number;
  // }

  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  
}

console.log(`Загальна сума чисел дорівнює ${total}`);
alert(`Загальна сума чисел дорівнює ${total}`);