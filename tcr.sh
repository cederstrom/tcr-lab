#!/bin/sh

#RED:
#npm run test && git restore -s@ -SW

#GREEN:
git add --all && npm run test && git commit -m "green 🥬" || git restore -s@ -SW  -- src
