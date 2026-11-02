// Remove Element

// Given:

// arr = [3,2,2,3]
// val = 3

// Move all elements that aren't val to the beginning.

// Expected:

// [2,2,_,_]

//Time Complexity O(n) and space Complexity O(1).


const removeElement = (arr, val) => {
    let writeIndex = 0;

    for (let readValue = 0; readValue < arr.length; readValue++){
        if (arr[readValue] != val) {
            arr[writeIndex] = arr[readValue];
            writeIndex++;
        }
    }

    arr.length = writeIndex;
    return arr;
}

console.log(`Converted Array Is ${removeElement([1,2,3, 2, 2, 3, 4, 5], 3)}`);