#!/bin/sh

npm run test && (git add --all && git commit -m "green 🥬") || git checkout -f