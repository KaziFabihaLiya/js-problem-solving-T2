const disha = 56;
const salman = 95;

if (disha>salman){
    console.log('Disha will get the strawberry')
}
else{
    console.log('Salman will get the strawberry')
}

function getMax(num1, num2){
    if (num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(73,97)
const max2 = getMax(93,100)
const ultimateMax = getMax(max1,max2);


console.log(ultimateMax);