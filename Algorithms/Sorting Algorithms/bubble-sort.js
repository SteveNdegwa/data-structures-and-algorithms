///// Given an array of integers, sort the array

/*
Poor sorting algorithm

1.Compare adjacent elements in the array and swap the positions if they are not in the intended order
2.Repeat the instruction as you step through each element in the array
3.Once you step through the whole array with no swaps, the array is sorted
*/

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort([4, -3, 9, -5, 1, 2, 7]));

//// Big-O = O(n^2);
