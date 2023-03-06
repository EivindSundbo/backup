/*
Exercise 1: Filter values less than or equal to 100

There is an array called 'values' that contains
a set of values.

Use the .filter array method to loop through the
'values' array. Filter the values so you only get values
that are less than or equal to (<=) to 100.

A new variable 'valuesBelow100' has been provided for
you. Set this variable to the .map array method you created.

*/

const values = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500, 1000];

// We are making use of the implicit (automatic) return from the arrow function
const valuesBelow100 = values.filter((value) => value <= 100);

// Less ideal: The following is without using the implicit return:
const valuesBelow100WithReturn = values.filter((value) => {
  return value <= 100;
});

// Less ideal: The following is with specifically checking if it's true:
const valuesBelow100WithIf = values.filter((value) => {
  if (value <= 100) {
    return true;
  }
});

console.log(valuesBelow100);
