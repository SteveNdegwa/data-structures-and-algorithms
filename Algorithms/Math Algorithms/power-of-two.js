///// Given an integer 'n' determine if the number is a power of two

function powerOfTwo(n){
    if(n < 1){
        return false;
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;
}

//// Big-O = O(log n)  --- input size reduces by two



function powerOfTwoBitwise(n){
    if(n < 1){
        return false;
    }
    return (n & (n-1)) === 0;
}

//// Big-O = O(1) -- constant irrespective of n