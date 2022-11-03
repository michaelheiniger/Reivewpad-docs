#!/bin/bash

# Check all *.yml files in a directory and subdirectories are valid
# Usage: ./checker.sh <location_of_reviewpad_cli> <directory_to_look_for_yml_configurations> <github_token> <github_repo>

# Check if the reviewpad cli is installed
if [ ! -f "$1" ]; then
    echo "Reviewpad cli not found"
    exit 1
fi

# Check if a directory is provided
if [ -z "$2" ]
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
if [ -z "$4" ]
then
    echo "No github repo provided"
    exit
fi

# Check if the directory exists
if [ ! -d "$2" ]
then
    echo "Directory does not exist"
    exit
fi

# Run lint checker on all *.yml files in the directory
echo "👉👉👉👉👉👉 Running lint check"
for file in $(find "$2" -name "*.yml")
do
    echo "👉 Checking $file"
    "$1" check --file="$file"
done

# Run reviewpad in dry-run mode on all *.yml files in the directory
echo "👉👉👉👉👉👉 Running reviewpad in dry-run mode"
for file in $(find "$2" -name "*.yml")
do
    echo "👉 Checking $file"
    "$1" run -d -u="$4" -t="$3" -f="$file"
done

