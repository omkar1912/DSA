// We Have to find the elements from the Array whose occurence in the array is greater than n / 2 times
//     in O(n) time and O(1) space.

//Solution Is Solving By Boyer Moore algorithm.Using Voting Algorithm like first we Ahve to calculate the canditate whose has got more votes then we have to Calculate the count of the votes he got and then need to find that the total votes is greater half of the total then he is the winner.

function findMajorityElement(arr) {
    let candidate = null;
    let count = 0;

    for (let num of arr) {
        if (count == 0) {
            candidate = num;
        }

        if (num == candidate) {
            count++;
        }
        else {
            count--;
        }
    }

    count = 0;

    for (let num of arr) {
        if (num == candidate) {
            count++;
        }
    }

    if (count > arr.length / 2) {
        return candidate;
    }

    return null;
    
}

console.log(findMajorityElement([1,2,2,2,2,5,6]));