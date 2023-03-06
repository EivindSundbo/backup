/*
Exercise 1: Multiply by 2

There is an array called 'values' that contains
a set of values.

Use the .map array method to loop through the
'values' array and multiply each value by 2.

A new variable 'valuesTimesTwo' has been provided for
you. Set this variable to the .map array method you created.

*/

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Note how we are not adding a 'return' below. This is
// because there is an implicit (automatic) return directly
// after the arrow.
const valuesTimesTwo = values.map((value) => value * 2);

// Alternative solution without implicit return:
const valuesTimesTwoReturn = values.map((value) => {
  return value * 2;
});

console.log(valuesTimesTwo);
