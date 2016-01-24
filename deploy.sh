#! /usr/bin/env bash

set -e

REMOTE=$1

DEPLOYMENT_BRANCH="gh-pages"

ORIGINAL_BRANCH=$(git branch | grep "*" | cut -f2 -d' ')

git stash

jekyll build

# should fail if checkout is not clean
git checkout "$DEPLOYMENT_BRANCH"

cp -ar _site/* . && rm -rf _site

touch .nojekyll

# otherwise no changes
if [[ $(git status --porcelain) ]]
then
  git add .
  git commit -m "Automatic deploy commit : $(date '+%a %M:%H %h %d %Y')"
  git push "$REMOTE" "$DEPLOYMENT_BRANCH"
fi

git checkout "$ORIGINAL_BRANCH"

git stash pop
