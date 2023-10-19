///// Given a number 'n' determine if its prime or not

function isPrime(n){
    if(n < 2){
        return false;
    }
    for(let i=2; i<Math.sqrt(n);i++){
         /// whenever 'n=a*b' one of 'a' and 'b' is <= sqrt(n)
         if(n % i === 0){
            return false;
         }
    }
    return true;
}


//// Big-O = O(sqrt(n))