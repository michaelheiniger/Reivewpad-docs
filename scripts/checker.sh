#!/bin/bash

# Check all *.yml files in a directory and subdirectories are valid
# Usage: ./checker.sh <directory> <github_token> <github_repo>

# Check if a directory is provided
if [ -z "$1" ]
then
    echo "No directory provided"
    exit
fi

# Check if a github token is provided
if [ -z "$2" ]
then
    echo "No github token provided"
    exit
fi

# Check if a github repo is provided
if [ -z "$3" ]
then
    echo "No github repo provided"
    exit
fi

# Check if the directory exists
if [ ! -d "$1" ]
then
    echo "Directory does not exist"
    exit
fi

# Run lint checker on all *.yml files in the directory
echo "👉👉👉👉👉👉 Running lint check"
for file in $(find "$1" -name "*.yml")
do
    echo "👉 Checking $file"
    ../reviewpad/reviewpad-cli check --file="$file"
done

# Run reviewpad in dry-run mode on all *.yml files in the directory
echo "👉👉👉👉👉👉 Running reviewpad in dry-run mode"
for file in $(find "$1" -name "*.yml")
do
    echo "👉 Checking $file"
    ../reviewpad/reviewpad-cli run -d -u="$3" -t="$2" -f="$file"
done

