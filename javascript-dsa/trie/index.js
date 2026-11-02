// Trie (Prefix Tree)

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
  
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}

// Test cases
console.log('=== TRIE ===');
const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('application');

console.log('Search "apple":', trie.search('apple'));
console.log('Search "app":', trie.search('app'));
console.log('Search "appl":', trie.search('appl'));
console.log('StartsWith "app":', trie.startsWith('app'));
console.log('StartsWith "appl":', trie.startsWith('appl'));
