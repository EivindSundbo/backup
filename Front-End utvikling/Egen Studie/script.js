/**
 * Adds two numbers together and returns a value
 * @param {number} a First value
 * @param {number} b Second value
 * @returns {number} Returns the sum of param a and b
 * @example
 * ```js
 * // Use this funtion to return value of two parameters
 * function addNumbers(a, b) {
    const result = a + b;
  }
 * //Returns value of result
 * ```
 */
function addNumbers(a, b) {
    const result = a + b;
    // console.log(result);
    
    return result;
    
  }
  
addNumbers(0.5, 7);




const babyInfo = {
    boy: false,
    girl: true,
    age: 2,
    name: 'Tora',
}

const stringifiedBabyInfo = JSON.stringify(babyInfo);
// console.log(stringifiedBabyInfo);

const parsedBabyInfo = JSON.parse(stringifiedBabyInfo);
// console.log(parsedBabyInfo);


// localStorage.setItem('lessonKey', 'Local Storage');

// localStorage.removeItem('lessonKey')

// const pet = {
//     type: 'Dog',
//     name: 'Lilje',
//   };

//   const petString = JSON.stringify(pet)

//   localStorage.setItem('lessonKey', petString)


//   const petRetrieved = localStorage.getItem("lessonKey");
//   const parsedPetRetrieved = JSON.parse(petRetrieved);
//   console.log(parsedPetRetrieved);
  

// function greetPerson(personObject){
//     const { firstName, lastName } = personObject;
//     console.log(`Hello ${firstName} ${lastName}`);
// }
// const person = {
//     firstName: 'Tora',
//     lastName: 'Sundbø',
// }

// greetPerson(person)


// function greetPerson({firstName, middleName, lastName}){
//     console.log(`Hello ${firstName} ${middleName} ${lastName}`);
// }

// const person = {
//     firstName: 'Tora',
//     middleName: 'Gjerløw',
//     lastName: 'Sundbø',
// }

// greetPerson(person)



// const people = [
//     {
//         firstName: 'Ola',
//         lastName: 'Nordmann',
//         score: 8,
//       },
//       {
//         firstName: 'Kari',
//         lastName: 'Nordmann',
//         score: 9,
//       },
//       {
//         firstName: 'Joakim',
//         lastName: 'Nordmann',
//         score: 4,
//       },
// ];

// const winners = people.filter(({score}) => {
//     if (score >= 5){
//         return true;
//     }
    
// });
// console.log(winners);


// const values = [0, 1, 2,3];

// const [value0, , value2] = values;
// console.log(value0, value2);


