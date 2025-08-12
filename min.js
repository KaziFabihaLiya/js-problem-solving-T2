const prices = [20000, 16000, 50000, 100000, 120000]

function getMin(numbers){
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        
    }
    return min;
}

const min = getMin(prices);
console.log(min);