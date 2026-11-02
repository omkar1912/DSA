// Stack Implementation

class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
  
  print() {
    console.log(this.items.toString());
  }
}

// Example: Valid Parentheses
function isValidParentheses(s) {
  const stack = new Stack();
  const pairs = { ')': '(', '}': '{', ']': '[' };
  
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.isEmpty() || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  
  return stack.isEmpty();
}

// Test cases
console.log('=== STACK ===');
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log('Stack after pushes:');
stack.print();
console.log('Valid Parentheses "()" :', isValidParentheses('()'));
console.log('Valid Parentheses "([{}])":', isValidParentheses('([{}])'));
console.log('Valid Parentheses "([)]":', isValidParentheses('([)]'));
