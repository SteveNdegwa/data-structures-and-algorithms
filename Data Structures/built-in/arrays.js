const arr = [];

arr.push()  // add element to end of array
arr.unshift()  // add element to start of array
arr.pop() //remove element at end of array
arr.shift() //remove element at start of array

/**
 * Access - O(1)
 * Search - O(n)
 * push/pop - O(1)
 * shift/ unshift/ concat/ slice/ splice - O(n)
 * forEach/ map/  filter/ reduce - O(n)
 */

// iterate
for(const item of arr){
    console.log(item);
}