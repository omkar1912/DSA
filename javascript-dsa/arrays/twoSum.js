//Two Sum With the Two Pointer which will return the Values because as we are Sorting the array we Are losing the index of the values so we will return the values instead of indexes

function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    arr = arr.sort((a, b) => a - b);

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum == target) {
            return [arr[left], arr[right]];
        }

        else if(sum > target){
            right--;
        }
        else {
            left++;
        }
    }

    return null;
}


//Now we Will define the Function which Will Return the Indexes from the Array that is going match the values that is going to match the target


function twoSum1(arr, target) {
    let hashMap = new Map();
    for (let number of arr) {
        let complement = target - number;
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), arr.indexOf(number)];
            
        }

        hashMap.set(number, arr.indexOf(number));
    }

    return [];
}



function traditionalTwoSum(arr,target) {
    let left = 0;
    let right = arr.length - 1;
    let sum = 0;
    while (left < right) {
        sum = arr[left] + arr[right];
        
        if (sum === target) {
            return [arr[left], arr[right]];
        }

        if (sum > target) {
            right--;
        }
        else {
           left++; 
        }
    }
    return [];
}

console.log('Values for the two sum that matches the target is ' + traditionalTwoSum([5,6,9,11,13], 18));