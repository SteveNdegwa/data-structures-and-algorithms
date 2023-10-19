///// Given a number 'n' return its factorial

function recursiveFactorial(n){
    if(n == 0){
        return 1;  // best case
    }
    return n * recursiveFactorial(n-1);
}

/// Big-O = O(n)