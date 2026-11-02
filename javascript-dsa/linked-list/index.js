// Linked List Implementation

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  
  display() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(' -> ');
  }
  
  reverse() {
    let prev = null;
    let current = this.head;
    
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    
    this.head = prev;
  }
}

// Test cases
console.log('=== LINKED LIST ===');
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
console.log('Original List:', list.display());
list.reverse();
console.log('Reversed List:', list.display());
