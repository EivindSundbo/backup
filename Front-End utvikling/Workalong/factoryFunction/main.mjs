function createPerson(firstName, lastName, country, city){
    return{
        firstName: firstName,
        lastName: lastName,
        address: {
            country: country,
            city: city,
        },
        greet: function(){
            console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
        },
    };
}

const ola = createPerson('Ola', 'Nordmann', 'Norway', 'Oslo');
const tora = createPerson('Tora', 'Sundbø', 'Norway', 'Oslo');
tora.greet();




function createAnimal(name, type, food){
    return {
        name: name,
        type: type,
        food: food,
        eat: function(){
            console.log(`${name} is a ${type} and eats ${food}`);
        },
    };
}

const loke = createAnimal('Loke', 'dog', 'everything')
loke.eat();