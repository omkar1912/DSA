// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104



// starting from i = 7 and j from 1 now what I will do is will check the max value from by calucalating the difference between j and i and check if it is greater than the max profit then update the max profit.


const buyAndSell = (prices) => {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++){
        for (let j = i + 1; j < prices.length; j++){
            let currentProfit = prices[j] - prices[i];
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }

    return maxProfit;
}

console.log(buyAndSell([7, 6, 4, 3, 1]));



//For optimal Approach We need to find the  better Solution 
// We Will get the variable like minPrice and maxProfit
// Initially we will keep 1st price from the array to the minPrice and 0 to max profit 
// later we will traverse to the list and check for the min value in the list and subtract the next value to the min to get the Max profit


const optimalBuyAndSell = (prices) => {
    let minValue = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++){
        minValue = Math.min(minValue, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minValue);
    }

    return maxProfit;
}

console.log(optimalBuyAndSell([7,6,4,3,1]));
