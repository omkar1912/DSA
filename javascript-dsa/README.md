// README - How to Run DSA Projects

## JavaScript DSA Mastery Training

This project contains Data Structures and Algorithms implementations in JavaScript, organized by categories.

## Project Structure

\`\`\`
├── arrays/              # Array problems and algorithms
├── sorting/             # Sorting algorithms
├── searching/           # Search algorithms
├── linked-list/         # Linked list implementations
├── stack/               # Stack problems
├── queue/               # Queue problems
├── trees/               # Tree problems
├── bst/                 # Binary Search Tree
├── graph/               # Graph problems
├── dp/                  # Dynamic Programming
├── strings/             # String problems
├── recursion/           # Recursive problems
├── backtracking/        # Backtracking problems
├── greedy/              # Greedy algorithms
├── heap/                # Heap implementations
├── bit-manipulation/    # Bit manipulation
├── trie/                # Trie implementations
└── leetcode/            # LeetCode problems
\`\`\`

## Installation & Setup

### Method 1: Direct Node.js (Local)

1. **Install Node.js** (if not already installed)
   \`\`\`bash
   # Check if Node.js is installed
   node --version
   npm --version
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run Individual Programs**
   \`\`\`bash
   # Run array problems
   npm run arrays

   # Run sorting algorithms
   npm run sorting

   # Run linked list
   npm run linked-list

   # Run stack
   npm run stack

   # Run queue
   npm run queue

   # Run recursion
   npm run recursion

   # Run all other categories
   npm run trees
   npm run bst
   npm run graph
   npm run dp
   npm run strings
   npm run backtracking
   npm run greedy
   npm run heap
   npm run bit-manipulation
   npm run trie
   npm run leetcode
   \`\`\`

### Method 2: Using Docker (Containerized)

#### Prerequisites
- Docker installed: [Docker Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose installed: [Docker Compose Guide](https://docs.docker.com/compose/install/)

#### Setup with Docker Compose

1. **Build and Start Container**
   \`\`\`bash
   docker-compose up -d
   \`\`\`

2. **Enter the Container Shell**
   \`\`\`bash
   docker-compose exec dsa sh
   \`\`\`

3. **Run Programs Inside Container**
   \`\`\`bash
   # Inside container shell
   npm run arrays
   npm run sorting
   npm run stack
   npm run queue
   npm run recursion
   \`\`\`

4. **Run Single File**
   \`\`\`bash
   node arrays/index.js
   node sorting/index.js
   node linked-list/index.js
   \`\`\`

5. **Exit Container**
   \`\`\`bash
   exit
   \`\`\`

#### Alternative Docker Commands

1. **Build Docker Image Manually**
   \`\`\`bash
   docker build -t javascript-dsa .
   \`\`\`

2. **Run Container Interactively**
   \`\`\`bash
   docker run -it --rm -v $(pwd):/app javascript-dsa sh
   \`\`\`

3. **Run Specific Script in Container**
   \`\`\`bash
   docker run -it --rm -v $(pwd):/app javascript-dsa node arrays/index.js
   \`\`\`

4. **Stop and Remove Containers**
   \`\`\`bash
   docker-compose down
   \`\`\`

## How to Add New Solutions

1. Create a `.js` file in the respective folder
2. Write your solution following the template in existing files
3. Add test cases at the bottom
4. Run with \`node filename.js\` or use npm scripts

### Example Structure
\`\`\`javascript
// Problem description and solution

// Main function
function solve() {
  // Your code here
}

// Test cases
console.log('=== CATEGORY ===');
console.log('Test 1:', solve());
\`\`\`

## Running Tests

\`\`\`bash
# Run all test files (if you create .test.js files)
npm test
\`\`\`

## Tips

- Each file in `/arrays/index.js`, `/sorting/index.js`, etc. has example problems
- Modify and extend these files with your own solutions
- Use Docker for isolated, consistent environment
- Docker ensures your code runs the same way on any machine

## Commands Summary

\`\`\`bash
# Direct Node
npm install
npm run arrays

# Docker Compose
docker-compose up -d
docker-compose exec dsa sh
npm run arrays

# Direct Docker
docker build -t javascript-dsa .
docker run -it --rm -v $(pwd):/app javascript-dsa node arrays/index.js
\`\`\`

## Troubleshooting

**Issue: Docker not found**
- Solution: Install Docker from [docker.com](https://www.docker.com/)

**Issue: Port already in use**
- Solution: Change the port in docker-compose.yml

**Issue: npm install fails**
- Solution: Clear npm cache: \`npm cache clean --force\`

## Next Steps

1. Start with basic arrays and sorting
2. Move to data structures (linked list, stack, queue)
3. Learn trees and graphs
4. Practice dynamic programming
5. Solve LeetCode problems
