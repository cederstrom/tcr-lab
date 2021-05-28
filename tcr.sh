#!/bin/sh

git add --all && npm run test && (git commit -m "green 🥬") || git restore -s@ -SW  -- src
