// Squares of a Sorted Array

// Input:  [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// This is an excellent problem because the array is sorted but contains negative numbers.

// Hint: Think about the largest absolute values at both ends.


const squaresSortedArray = (arr) => {
    let left = 0;

    let right = arr.length - 1;

    let result = Array.from({ length: arr.length }).fill(0);
    
    let insertIndex = arr.length - 1;

    while (left < right) {
        let leftSquared = arr[left] * arr[left];
        let rightSquared = arr[right] * arr[right];

        if (leftSquared > rightSquared) {
            result[insertIndex] = leftSquared;
            left++;
        }
        else {
            result[insertIndex] = rightSquared;
            right--;
        }

        insertIndex--;
    }

    return result;
}

console.log(squaresSortedArray([-8,-4, -1, 0, 3, 10,12]));