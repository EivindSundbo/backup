const modulePatternExample = (function () {
    const _privateVariable = 'Private';
    const _privateMethod = function () {
        console.log('Private method');
    };

    const publicVariable = 'Public';
    const publicMethod = function () {
        console.log('Public method');
    };

    return {
        publicVariable,
        publicMethod,
    };
})();

modulePatternExample.publicMethod();
console.log(modulePatternExample.publicVariable);

//-----------------------------------------------------------

const shoppingCart = (function () {
    const _cart = [];

    function addToCart(item) {
        _cart.push(item);
    }

    function getCartItems() {
        return [..._cart];
    }

    return {
        addToCart,
        getCartItems,
    };
})();


const fish = {
    name: 'fish',
    price: 8.47,
}

shoppingCart.addToCart({ name: 'Milk', price: 19.99 });
shoppingCart.addToCart(fish);
console.log(shoppingCart.getCartItems());