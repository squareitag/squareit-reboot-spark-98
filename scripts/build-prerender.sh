#!/bin/bash

echo "🚀 Building with Pre-Rendering..."

# Build the React app
echo "📦 Building React app..."
npm run build

# Start development server for pre-rendering
echo "🌐 Starting development server..."
npm run dev &
SERVER_PID=$!

# Wait for server to be ready
echo "⏳ Waiting for server to be ready..."
sleep 10

# Run pre-rendering
echo "📄 Running pre-rendering..."
node scripts/prerender.js

# Stop development server
echo "🛑 Stopping development server..."
kill $SERVER_PID

echo "✅ Pre-rendering completed!"
echo "📁 Check dist/ folder for pre-rendered HTML files"