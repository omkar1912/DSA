// Graph Algorithms

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }
  
  // DFS - Depth First Search
  dfs(startVertex) {
    const visited = new Set();
    const result = [];
    
    const dfsHelper = (vertex) => {
      visited.add(vertex);
      result.push(vertex);
      
      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };
    
    dfsHelper(startVertex);
    return result;
  }
  
  // BFS - Breadth First Search
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];
    
    visited.add(startVertex);
    
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      
      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    
    return result;
  }
}

// Test cases
console.log('=== GRAPH ===');
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log('DFS from 1:', graph.dfs(1));
console.log('BFS from 1:', graph.bfs(1));
