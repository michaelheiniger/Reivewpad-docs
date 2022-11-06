#!/bin/bash

# Check all *.yml files in a directory and subdirectories are valid
# Usage: ./checker.sh <directory>

# Check if a directory is provided
if [ -z "$1" ]
then
    echo "No directory provided"
    exit
fi

# Check if the directory exists
if [ ! -d "$1" ]
then
    echo "Directory does not exist"
    exit
fi

# Check all *.yml files in the directory and subdirectories
for file in $(find "$1" -name "*.yml")
do
    echo "======================"
    echo "Checking $file"
    echo " "
    ../reviewpad/reviewpad-cli check --file="$file"
done

