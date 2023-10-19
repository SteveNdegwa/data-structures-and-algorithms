///// Given an array of integers, sort the array

/**
 * Virtually split array into a sorted and an unsorted part
 
 * Assume that the first element is already sorted and remaining elements are unsorted
 
 * Select an unsorted element and compare with elements in the sorted part
 
 * If the elements in the sorted part is smaller than the selected element, procees to the next element in the unsorted part. Else shift larger elements in the sorted part toward the right.
 
 * Insert the selected element at the right index
 
 * Repeat till all the unsorted elements are placed in the right order
 */

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let numberToInsert = arr[i];

        let j = i - 1;

        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
            j = j - 1;
        }

        arr[j+1] = numberToInsert;
    }
    return arr;
}

console.log(insertionSort([4, -3, 9, -5, 1, 2, 7]));

/// Big-O = O(n^2)