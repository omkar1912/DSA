// Recursion Examples

// Factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Fibonacci with Memoization (optimized)
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

// Test cases
console.log('=== RECURSION ===');
console.log('Factorial of 5:', factorial(5));
console.log('Fibonacci of 6:', fibonacci(6));
console.log('Fibonacci Memo of 6:', fibonacciMemo(6));
console.log('Fibonacci Memo of 10:', fibonacciMemo(10));
