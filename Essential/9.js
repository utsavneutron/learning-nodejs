function findMaxSum(arr) {
  // Your code goes here
//   let first, second;
//   if(numbers[0] > numbers[1])
//     {
//       first = numbers[0];
//       second = numbers[1];
//     }
//   else
//     {
//       first = numbers[1];
//       second = numbers[0];
//     }
  
//   for (let i =2; i< numbers.length; i++)
//     {
//       if (numbers[i] > first)
//         {
//           second = first;
//           first = numbers[i];
//         }
//       else if( numbers[i] > second && numbers[i] != first){
//         second = numbers[i]
//       }
//       return (first + second)
//     }
 let first, second;
        if (arr[0] > arr[1])
        {
            first = arr[0];
            second = arr[1];
        }
        else
        {
            first = arr[1];
            second = arr[0];
        }
       
        // Traverse remaining array and
        // find first and second largest
        // elements in overall array
        for (let i = 2; i < arr.length; i ++)
        {
            /* If current element is greater
               than first then update both
               first and second */
            if (arr[i] > first)
            {
                second = first;
                first = arr[i];
            }
       
            /* If arr[i] is in between first
               and second then update second */
            else if (arr[i] > second &&
                     arr[i] != first)
                second = arr[i];
        }
        return (first + second);
}

console.log(findMaxSum([ 5, 9, 7, 11 ])); // should print 20


// function findMaxSum(numbers) {
//   // Your code goes here
//   let n = numbers.length;
//   var sortedNumbers = quickSort(numbers, 0, numbers.length - 1);
//   return sortedNumbers[n-1] + sortedNumbers[n-2]
  
// }

// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
