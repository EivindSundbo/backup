const myObjectLiteral = {
    // A number type stored as the value
    myValue: 99,
    // method stored under 'myFunction' key
    myMethod: function () {
      // Accessing 'myValue' with the 'this' keyword
      console.log(this.myValue);
    },
  };

myObjectLiteral.myMethod();

//------------------------------------------------

const shoppingCart = {
    cart: [],
    addToCart: function(item){
        this.cart.push(item);
    },
    getCartItems: function(){
        console.log('Cart:', this.cart);
    },
};

shoppingCart.addToCart({name: 'Milk', price: 99.9});
shoppingCart.getCartItems();
//------------------------------------------------


const bruker = {
    firstName: 'John',
    lastName: 'Nordmann',
    setFirstName: function (newFirstName){
        this.firstName = newFirstName;
    },
    setLastName: function (newLastName){
        this.lastName = newLastName
    }
};
bruker.setLastName('Sundbø')
bruker.setFirstName('Tora');
console.log(bruker.firstName);
//------------------------------------------------

const user = {
    _firstName: 'John',

    set firstName(newFirstName){
        this._firstName = newFirstName;
    },

    get firstName(){
        return this._firstName;
    },
};
user.firstName = 'Ola';
console.log(user.firstName);

//---------------------------------


const computer = {
    gpu: 'gtx1070',
    cpu: 'i5',
    setGpu: function (newGpu){
        this.gpu = newGpu;
    },
    setCpu: function (newCpu){
        this.cpu = newCpu
    },
};

computer.setGpu('rtx3090');
computer.setCpu('i7');

console.log(computer.gpu);
