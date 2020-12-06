// 'use strict';

const logItems = function (array) {
  for (const element of array) {
    const elementIndex = array.indexOf(element);
    const elementNumber = elementIndex + 1;

    console.log(`${elementNumber} - ${element}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);