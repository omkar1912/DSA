// [0,1,0,3,12]

// Become:

// [1,3,12,0,0]

// Try solving without creating another array.

const moveZeroes = (arr) => {
    if (arr.length === 0) return '';

    let writeIndex = 0;

    for (let readIndex = 0; readIndex < arr.length; readIndex++){
        if (arr[readIndex] != 0) {
            [arr[writeIndex], arr[readIndex]] = [arr[readIndex], arr[writeIndex]];
            writeIndex++;
        }
    }

    return arr;
}


console.log(`Array after moving Zeroes ${moveZeroes([0, 1, 0, 3, 12, 0, 0, 8, 6, 0])}`);