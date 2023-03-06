// /**
//  * Adds two numbers together
//  * @param {number} a First value
//  * @param {number} [b] Second value
//  * @returns {number} Sum of params
//  * @example
//  * ```js
//  * // Add two numbers together
//  * const a = 1;
//  * const b = 2;
//  * const sum = addNumbers(a, b);
//  * // expect sum to be 3
//  * ```
// */
// export function addNumbers(a, b){
//     console.log(a+b);
// }

// addNumbers(45, 2);

// /**
//  * Example function
//  * @param {dataType} [optionalParameterName=10] optionalParameterDescription
//  */


/**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 */

/**
 * Adds two numbers together
 * @param {NumberLike} a
 * @param {NumberLike} b
 */
export function addNumbers(a, b){
    console.log(a+b);
}

addNumbers(1, 2)