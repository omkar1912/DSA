// Heap / Priority Queue

class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  push(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  
  pop() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return min;
  }
  
  bubbleUp(index) {
    const value = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (value >= this.heap[parentIndex]) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }
    this.heap[index] = value;
  }
  
  bubbleDown(index) {
    const length = this.heap.length;
    const value = this.heap[index];
    
    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let swap = null;
      
      if (leftChild < length && this.heap[leftChild] < value) {
        swap = leftChild;
      }
      if (rightChild < length && this.heap[rightChild] < (swap === null ? value : this.heap[leftChild])) {
        swap = rightChild;
      }
      
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = value;
  }
  
  peek() {
    return this.heap[0];
  }
  
  size() {
    return this.heap.length;
  }
}

// Test cases
console.log('=== HEAP ===');
const minHeap = new MinHeap();
[5, 3, 17, 10, 84, 19, 6, 22, 9].forEach(val => minHeap.push(val));

console.log('Min Heap top:', minHeap.peek());
console.log('Extracted:', minHeap.pop());
console.log('Size:', minHeap.size());
