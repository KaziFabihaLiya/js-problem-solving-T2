const products = [
    {quantity: 1, name: 'shampoo', price: 300},
    {quantity: 5, name: 'conditioner', price: 400},
    {quantity: 3, name: 'toothpaste', price: 200},
    {quantity: 2, name: 'toothbrush', price: 100}

]

function cart (products){
    let total = 0;
    for(const prod of products){
        total += prod.quantity * prod.price;
        total += prod.price;
    }
    return total;
}

const shoppingTotal = cart(products);
console.log(shoppingTotal);