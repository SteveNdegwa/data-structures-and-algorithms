 //// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found

/*
 pseudocode
 1. If the array is empty, return -1 as the lement cannot be found
 2. If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index.
 3. If the target is less than the middle element, binary search left half of the array.
 4. If the target is greater than the middle element, binary search right half of the array.

 */

 function recursiveBinarySearch(arr, t){
   return search(arr, t, 0, arr.length - 1);
 }

 function search(arr, t, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(t == arr[middleIndex]){
        return middleIndex;
    }
    if(t < arr[middleIndex]){
        return search(arr, t, leftIndex, middleIndex - 1);
    }else{
        return search(arr, t, middleIndex + 1, rightIndex);
    }
 }

 console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) /// 4
 console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) /// 3
 console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) /// -1

 /// Big-O = O(logn)