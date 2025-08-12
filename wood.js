function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChairWood = chairQuantity * perChairWood;
    const allTableWood = tableQuantity * perTableWood;
    const allBedWood = bedQuantity * perBedWood;

    const totalWood = allChairWood + allTableWood + allBedWood;
    return totalWood;
}

const totalWood = woodQuantity(8,1,5)
console.log(totalWood)

// shirt price ---> 500
// pant price ---> 800
// shoe price ---> 1300

function itemQuantity(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirt = 500;
    const perPant = 800;
    const perShoe = 1300;

    const allShirt = shirtQuantity * perShirt;
    const allPant = pantQuantity * perPant;
    const allShoe = shoeQuantity * perShoe;

    const totalPrice = allShirt + allPant + allShoe;
    return totalPrice;
}

const total = itemQuantity(1,1,1)
console.log(total)