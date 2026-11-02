// Arrays - Basic Operations and Problems

// Example: Two Sum Problem
function twoSum(nums, target) {
  const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
        console.log(`Complement: ${complement}`);   
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}

// Example: Find Maximum in Array
function findMax(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

// Test cases
console.log('=== ARRAYS ===');
console.log('Two Sum [2,7,11,15], target=9:', twoSum([2, 7, 11, 15], 9));
console.log('Find Max [1,5,3,9,2]:', findMax([1, 5, 3, 9, 2]));
