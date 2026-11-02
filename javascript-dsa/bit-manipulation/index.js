// Bit Manipulation

// Count Set Bits
function countSetBits(n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

// Check Power of Two
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// XOR of Array
function xorArray(arr) {
  return arr.reduce((xor, num) => xor ^ num, 0);
}

// Single Number (appears once, others appear twice)
function singleNumber(nums) {
  return nums.reduce((result, num) => result ^ num, 0);
}

// Test cases
console.log('=== BIT MANIPULATION ===');
console.log('Count set bits in 13:', countSetBits(13));
console.log('Is 16 power of 2:', isPowerOfTwo(16));
console.log('Is 15 power of 2:', isPowerOfTwo(15));
console.log('XOR array [1,1,2,2,3]:', xorArray([1, 1, 2, 2, 3]));
console.log('Single number [1,1,2,2,3]:', singleNumber([1, 1, 2, 2, 3]));
