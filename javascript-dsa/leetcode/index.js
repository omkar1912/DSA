// LeetCode Problems - Sample Solutions

// Problem 1: Two Sum
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Problem 3: Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  const charMap = new Map();
  let maxLength = 0, start = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      start = Math.max(start, charMap.get(s[i]) + 1);
    }
    charMap.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }
  
  return maxLength;
}

// Problem 20: Valid Parentheses
function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

// Test cases
console.log('=== LEETCODE ===');
console.log('Two Sum [2,7,11,15], 9:', twoSum([2, 7, 11, 15], 9));
console.log('Longest Substring "abcabcbb":', lengthOfLongestSubstring('abcabcbb'));
console.log('Valid Parentheses "([{}])":', isValid('([{}])'));
