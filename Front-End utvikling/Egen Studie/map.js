// This creates a new Map
const myMap = new Map();

myMap.set('a', 1);
myMap.set('b', 2);

// console.log(myMap.size);



const users = new Map();

users.set('12', {firstName: "Ola", lastName: "Nordmann"});
users.set('50', {firstName: "Kari", lastName: "Nordmann"});

console.log(users.size);

users.delete('12');
console.log();

console.log(users.size);