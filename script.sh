#!/bin/bash

usage() {
    echo "Usage: $0 --repourl $REPO_URL --reponame $REPO_NAME --branch $BRANCH --token $GITHUB_TOKEN"
    exit 1
}

# Function to check if required arguments are provided
check_required_arguments() {
    if [[ -z "$REPO_URL" || -z "$REPO_NAME" || -z "$BRANCH" || -z "$GITHUB_TOKEN" ]]; then
        echo "Error: Missing required arguments."
        usage
    fi
}

# Debugging: Print environment variables to check if they're being passed correctly
echo "Repository URL: $REPO_URL"
echo "Repository Name: $REPO_NAME"
echo "Branch: $BRANCH"
echo "GitHub Token: $GITHUB_TOKEN"

# Check required arguments (no need to parse command-line arguments anymore)
check_required_arguments

# Install Git if not already installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Installing..."
    apt-get update -y && apt-get install -y git
fi

# Configure git to use the token for authentication
git config --global credential.helper store

# Create a temporary file for credentials
echo "https://$GITHUB_TOKEN@github.com" > ~/.git-credentials

# Clone or update the repository with token authentication
if [[ -d "/var/www/$REPO_NAME" ]]; then
    echo "Pulling latest changes from the $BRANCH branch..."
    cd "/var/www/$REPO_NAME" || exit
    git pull origin "$BRANCH"
else
    echo "Cloning repository from the $BRANCH branch..."
    git clone -b "$BRANCH" "https://$GITHUB_TOKEN@github.com/$REPO_URL/$REPO_NAME.git" "/var/www/$REPO_NAME"
    cd "/var/www/$REPO_NAME" || exit
fi

# Configure git to trust the directory
git config --global --add safe.directory "/var/www/$REPO_NAME"

echo "Repository cloned or updated successfully!"