///// Given two finite non-empty sets, find their Cartesian Product 

/**
 * eg;  const A = [1,2]  and const B = [3,4,5]  Cartesian Product(A*B) = [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]
 * 
 */

function cartesianProduct(arr1, arr2){
    const result = [];

    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            result.push([arr1[i], arr2[j]]);
        }
    }

    return result;
}

console.log(cartesianProduct([1,4], [6,3,8]));

///// Big-O = O(mn)   - This is because the two arrays may be of different lengths. 
///   O(n^2) if the arrays are same length