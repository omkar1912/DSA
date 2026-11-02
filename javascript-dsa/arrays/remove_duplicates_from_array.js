//Remove the duplicates from an array using two pointers.
// [1,1,2,2,3,3,4,4];
// [1,2,3,4]

//In solution 1 What we have Done is that we Are creating a new array and we know the the input Is sorted array so we are Inserting first element in the array so that its will first unique. Then we Are teaversing the array such that we Are looking for the unique to the right and inserting that element in the array and moving the pointer to the right so that we can find other unique element. The result is that we Are using O(n) time complexity and O(n) space As we are creating a new array.

const removeDuplicatesFromArray = (sortedArray) => {
    let left = 0;
    let right = 1;
    let result = [sortedArray[left]];

    while (right < sortedArray.length) {
        if (sortedArray[left] !== sortedArray[right]) {
            result.push(sortedArray[right]);
            left = right;
        }
        right++;
    }

    return result;
}

// console.log(removeDuplicatesFromArray([1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5,5]))


//Now I am trying a solution for the time Complexity O(n) and O(1) Space Complexity


const removeDuplicates = (sortedArray) => {
    let left = 0;
    let right = 1;

    while (right < sortedArray.length) {
        if (sortedArray[left] === sortedArray[right]) {
            right++;
        }
        else if(sortedArray[left] !== sortedArray[right]){
            left++;
            [sortedArray[left], sortedArray[right]] = [sortedArray[right], sortedArray[left]];
            right++
        }
    }

    sortedArray.length = left + 1;

    return sortedArray;
}

console.log(`Removing Duplicates from the array . New array is ${removeDuplicates([1, 1,1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5 , 5 , 5 , 5 , 5])}`);


