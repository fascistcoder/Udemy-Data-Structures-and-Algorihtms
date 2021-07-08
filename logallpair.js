"use strict";

function printAllNumbersThenAllPairs(numbers) {
  console.log("these are the numbers");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("these are their sums");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairs([1,2,3,4,5]);
