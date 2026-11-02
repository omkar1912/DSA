// String Problems

// Palindrome Check
function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Reverse String
function reverseString(s) {
  return s.split('').reverse().join('');
}

// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  const charMap = new Map();
  let maxLength = 0;
  let start = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      start = Math.max(start, charMap.get(s[i]) + 1);
    }
    charMap.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }
  
  return maxLength;
}

// Test cases
console.log('=== STRINGS ===');
console.log('Palindrome "A man a plan a canal Panama":', isPalindrome('A man a plan a canal Panama'));
console.log('Reverse "hello":', reverseString('hello'));
console.log('Longest Substring "abcabcbb":', lengthOfLongestSubstring('abcabcbb'));
