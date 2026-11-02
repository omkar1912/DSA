// LeetCode 2621. Sleep
// Easy
// premium lock icon
// Companies
// Hint
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.


async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}

console.log('Starting ......');
sleep(1000).then(() => console.log('Done'));
console.log('Done...');