// Searching Algorithms

// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Binary Search
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}

// Test cases
console.log('=== SEARCHING ===');
console.log('Linear Search:', linearSearch([2, 4, 6, 8, 10], 6));
console.log('Binary Search:', binarySearch([1, 3, 5, 7, 9, 11], 7));
