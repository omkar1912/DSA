//Reverse a number in an array using two pointer technique.
// [1,2,3,4]
// [4,3,2,1]


const reverseNumber = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        right--;
        left++;
    }
    
    return arr;
}

const arr = [5, 9, 6, 3, 8];

console.log(`Reverse of an array ${arr} is ${reverseNumber(arr)}`);
