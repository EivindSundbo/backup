// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     greetUser() {
//         console.log(`Hello ${this.name}!`);
//     }

//     static company = 'Acme';

//     static displayTime() {
//         console.log('12:00');        
//     }
// }

// const newUser = new User ('Ola Nordmann');

// newUser.greetUser();
// console.log(User.company);
// User.displayTime();


// class Person {

//     constructor(firstName){
//         this.firstName = firstName;
//     }

//     greet(){
//         console.log("Hello " + this.firstName);       
//     }
// }

// const tora = new Person("Tora")
// const eivind = new Person("eivind")

// eivind.greet();
// tora.greet();

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }

    speak(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

const newPerson = new Person('Ola', 'Nordmann');
newPerson.speak();