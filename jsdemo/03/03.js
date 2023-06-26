// number is prime

function isPrime(number){
    if(number <= 1){
        return false;
    }else{
        for(i = 2; i < Math.sqrt(number); i++){
            if(number % i == 0){
                return false;
            }
        }

        return true;
    }
}

let number = 3;
let numIsPrime = isPrime(number);

if(numIsPrime){
    console.log(`${number} is a Prime Number`)
}else{
    console.log(`${number} is not a Prime Number`)
}

isPrime();