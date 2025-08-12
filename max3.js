const jim = 56;
const kim  = 89;
const tim = 68;

if(jim> kim && jim>tim){
    console.log("jim is the biggest");
}
else if(tim> kim && tim>jim){
    console.log("tim is the biggest");
}
else{
    console.log("kim is the biggest kardashian");
}

function getMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if(num2> num1 && num2> num3){
        return num2;
    }
    else{
        return num3;
    }
}
const max = getMax(55,47,12);
console.log(max)

const getMaxx = Math.max(12,1,8,47,6,8,7,2,48,-66)
console.log('max: ',getMaxx)