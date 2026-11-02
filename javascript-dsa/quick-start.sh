#!/bin/bash

# JavaScript DSA Mastery - Quick Start Script

echo "=========================================="
echo "JavaScript DSA Mastery - Setup & Run"
echo "=========================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed"
    echo "Install Docker from: https://docs.docker.com/get-docker/"
    exit 1
fi

echo "✅ Docker is installed"
echo ""

# Check if Docker Compose is installed
if ! command -v docker compose &> /dev/null; then
    echo "❌ Docker Compose is not installed"
    echo "Install Docker Compose from: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Docker Compose is installed"
echo ""

# Option menu
echo "Choose an option:"
echo "1) Start Docker Container with Docker Compose"
echo "2) Run specific DSA program"
echo "3) Install Node.js locally and run"
echo "4) Show all available programs"
echo ""

read -p "Enter option (1-4): " option

case $option in
    1)
        echo "Building and starting Docker container..."
        docker-compose up -d
        echo ""
        echo "✅ Container started! Enter with:"
        echo "   docker-compose exec dsa sh"
        echo ""
        echo "To run programs inside container:"
        echo "   npm run arrays"
        echo "   npm run sorting"
        echo "   npm run recursion"
        ;;
    2)
        echo "Available DSA programs:"
        echo "  arrays, sorting, searching, linked-list"
        echo "  stack, queue, trees, bst, graph"
        echo "  dp, strings, recursion, backtracking"
        echo "  greedy, heap, bit-manipulation, trie, leetcode"
        echo ""
        read -p "Enter program name: " program
        
        if command -v node &> /dev/null; then
            npm run "$program"
        else
            echo "Node.js not found. Using Docker..."
            docker run -it --rm -v $(pwd):/app javascript-dsa npm run "$program"
        fi
        ;;
    3)
        echo "Installing Node.js dependencies..."
        npm install
        echo ""
        echo "✅ Dependencies installed!"
        echo ""
        echo "Run programs with:"
        echo "  npm run arrays"
        echo "  npm run sorting"
        echo "  npm run recursion"
        ;;
    4)
        echo "Available npm scripts:"
        grep "\"npm run" package.json
        ;;
    *)
        echo "Invalid option"
        exit 1
        ;;
esac
