//Palindrome Check 
//racecar  -> true
//hello -> false

//we have  to use regular Expression for the ignoring the special characters and 
// like [^a-z0-9]/g and first need to lower the case and then 

function isPalindrome(str) {
    if (typeof str !== 'string') return false;

    let cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleanString.length - 1;
    
    while (left < right) {
        if (cleanString[left] !== cleanString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(`'null is palindrome ?? ${isPalindrome(null)}`);