//Reverse the string using Two Pointers

//Solution -: We Need to do it in O(n) space. We Cannot do it in O(1) space because strings are immutable means we cannot change the value. 

const reverseString = (str) => {
    if (typeof str !== 'string') {
        return '';
    }

    let convertedString = str.split('');

    let left = 0;
    let right = convertedString.length - 1;

    while (left < right) {
        [convertedString[left], convertedString[right]] = [convertedString[right], convertedString[left]];
        left++;
        right--;
    }

    return convertedString.join('');

}

const str = 'Pranay Ghadi. How are you babes?';
console.log(`Reverse of the string ${str} is ${reverseString(str)}`);