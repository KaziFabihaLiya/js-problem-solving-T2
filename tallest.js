const heights = [65, 66, 98, 47, 55, 22, 77];

function getMax(numbers) {
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
        console.log(num);
    }
    return max;
}

const max = getMax(heights);
console.log('max value is ', max);

// min ber koro