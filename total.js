const products = [
    {name: 'shampoo', price: 300},
    {name: 'conditioner', price: 400},
    {name: 'toothpaste', price: 200},
    {name: 'toothbrush', price: 100}

]

function getShoppingTotal (products){
    let total = 0;
    for(const prod of products){
        total += prod.price;
    }
    return total;
}

const shoppingTotal = getShoppingTotal(products);
console.log(shoppingTotal);