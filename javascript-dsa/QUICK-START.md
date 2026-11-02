# Quick Start Guide - JavaScript DSA Mastery

## 🚀 Quick Setup (Choose One Method)

### Method 1: Using Docker Compose (Recommended)

```bash
# Navigate to project directory
cd javascript-dsa

# Start container
docker-compose up -d

# Enter container
docker-compose exec dsa sh

# Run any program
npm run arrays
npm run sorting
npm run recursion

# Exit container
exit

# Stop container
docker-compose down
```

### Method 2: Using Local Node.js

```bash
# Navigate to project directory
cd javascript-dsa

# Install dependencies
npm install

# Run programs
npm run arrays
npm run sorting
npm run recursion

# Run specific file directly
node arrays/index.js
```

### Method 3: Using Docker CLI Directly

```bash
# Build image
docker build -t javascript-dsa .

# Run container
docker run -it --rm -v $(pwd):/app javascript-dsa sh

# Run from host
docker run -it --rm -v $(pwd):/app javascript-dsa npm run arrays
```

## 📚 Available Programs

Run any of these commands:

```bash
npm run arrays              # Array problems
npm run sorting             # Sorting algorithms
npm run searching           # Search algorithms
npm run linked-list         # Linked list
npm run stack               # Stack problems
npm run queue               # Queue problems
npm run trees               # Tree traversal
npm run bst                 # Binary Search Tree
npm run graph               # Graph algorithms
npm run dp                  # Dynamic Programming
npm run strings             # String problems
npm run recursion           # Recursion examples
npm run backtracking        # Backtracking problems
npm run greedy              # Greedy algorithms
npm run heap                # Heap/Priority Queue
npm run bit-manipulation    # Bit manipulation
npm run trie                # Trie implementation
npm run leetcode            # LeetCode problems
```

## 🐳 Docker Commands Reference

| Command | Description |
|---------|-------------|
| `docker-compose up -d` | Start container in background |
| `docker-compose exec dsa sh` | Enter container shell |
| `docker-compose down` | Stop and remove container |
| `docker build -t javascript-dsa .` | Build custom image |
| `docker run -it --rm -v $(pwd):/app javascript-dsa npm run arrays` | Run single command |
| `docker ps` | List running containers |
| `docker logs javascript-dsa-mastery` | View container logs |

## 📋 Project Structure

- Each folder contains a specific DSA topic
- Each `index.js` file has example problems and solutions
- Run individual files or use npm scripts

## 🔧 Troubleshooting

**Docker not found?**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

**Port issues?**
Edit `docker-compose.yml` to change ports

**npm install fails in Docker?**
```bash
docker-compose exec dsa npm cache clean --force
docker-compose exec dsa npm install
```

## 💡 Tips

- Use Docker for consistent environment
- Each program shows test cases at the bottom
- Modify files and re-run to test changes
- All changes in host are reflected in container automatically
