///// Given an array of integers, sort the array

/**
 * Identify the pivot element in the array - (first element / last element / random element / median)
 
 * Put everything smaller than the pivot into a 'left' array and everything that is greater into a 'right' array.
 
 * Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition
 
 * Repeatedly concateneate the left array, pivot and right array till one sorted array remains
 */

function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length - 1]; //last element
    let left = [];
    let right = [];

    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([4, -3, 9, -5, 1, 2, 7])); 

//// worst case = O(n^2)  if array is already sorted
//// average case =  O(nlogn)
