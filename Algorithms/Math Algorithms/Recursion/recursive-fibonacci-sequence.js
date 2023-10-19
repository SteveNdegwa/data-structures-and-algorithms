//// Given a number 'n' return the 'nth' value of the fibonacci sequence

/// (0,1,1,2,3,5,8,....)  fibonacci(0) = 0 , fibonacci(6) = 8

function recursiveFibonacci(n){
    if(n < 2){
        return n;  // best case
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}


// Big-O = O(2^n)  -- Horrible time complexity