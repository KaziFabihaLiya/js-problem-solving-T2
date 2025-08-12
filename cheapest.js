const mobiles = [
    { name: 'Samsung', price: 20000, camera: '8MP', color: 'black' },
    { name: 'Xiaomi', price: 200000, camera: '8MP', color: 'black' },
    { name: 'Walton', price: 10000, camera: '8MP', color: 'black' },
    { name: 'Oppo', price: 80000, camera: '8MP', color: 'black' },
    { name: 'Huawei', price: 1000, camera: '8MP', color: 'black' }
]

function getCheapObj(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapObj(mobiles);
console.log(cheap);