/*
Exercise 1: Reduce all values to a total

Use .reduce to reduce all of the values to a single total.

An array 'values' has been provided for you.

A variable 'total' has been provided for you. You must use
this variable for the result of you .reduce array method.

Tip: Don't forget to set the initial value to 0

*/

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Below is a "one-liner" which is very concise but might be considered hard to read
const total = values.reduce((currentTotal, value) => currentTotal + value, 0);

// This solution shows the calculation taking place and the 'currentTotal' being returned
const totalExtended = values.reduce((currentTotal, value) => {
  currentTotal += value;
  return currentTotal;
}, 0);

console.log(total);
