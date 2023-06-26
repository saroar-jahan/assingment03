// square root of the numbers

let number = [3, 4];

function sqrRoot(number){
    let sumOfSqr = 0;

    for(i = 0; i < number.length; i++){
        sumOfSqr += Math.pow(number[i], 2)
    }

    return Math.sqrt(sumOfSqr);
}

let result = sqrRoot(number);

console.log(`Result is ${result}`)