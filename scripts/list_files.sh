#!/bin/bash

# Check if a folder path is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <folder_path>"
  exit 1
fi

FOLDER_PATH=$(realpath -s "$1")
FOLDER_NAME=$(basename "$FOLDER_PATH")
# Ensure FOLDER_PATH has a trailing slash for sed
[[ "${FOLDER_PATH}" != */ ]] && FOLDER_PATH="${FOLDER_PATH}/"

echo "const $FOLDER_NAME = ["

# Find all files, sort them, and process them
# Use process substitution to read from the sorted list of files
while IFS= read -r file; do
  # Determine if the file is black and white based on filename
  bw="false"
  if [[ "$file" == *"-bw-"* ]]; then
    bw="true"
  fi
  
  # Get just the filename by removing the full input path
  filename_only=$(echo "$file" | sed "s|^${FOLDER_PATH}||")
  # Prepend the base directory name to the filename
  relative_path="${FOLDER_NAME}/${filename_only}"
  
  echo "  { name: '$relative_path', 'bw': $bw},"
done < <(find "$FOLDER_PATH" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | sort)

echo "];"

