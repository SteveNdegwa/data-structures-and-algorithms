// Given a number 'n' find the first 'n' elements of the fibonacci sequence.

//  First 2 elements are 0 and 1 and in the sequence each number is the sum of the two preceding ones ie.(0,1,1,2,3,5,8,...)


function fibonacci(n){
    const fib = [0,1];

    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib;
}

console.log(fibonacci(2)); /// [0,1]
console.log(fibonacci(3)); /// [0,1,1]
console.log(fibonacci(7)); /// [0,1,1,2,3,5,8]



////   Big-O = O(n);