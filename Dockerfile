# Start from a Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files to install dependencies
COPY package*.json ./ 

# Update packages and install required tools
RUN apt-get update && apt-get install -y \
    npm \
    git \
    && apt-get clean

# Install project dependencies
RUN npm install

# Install Plasmic CLI globally
RUN npm install -g @plasmicapp/cli

# Copy the rest of the application code and script
COPY . .

# Copy script.sh specifically to /app
COPY ./script.sh /app/script.sh

# Make script.sh executable
RUN chmod +x /app/script.sh

# Define build arguments for secure access to private repo
ARG GITHUB_TOKEN
ARG REPO_URL
ARG REPO_NAME
ARG BRANCH

# Set environment variables from build arguments
ENV REPO_URL=${REPO_URL} \
    REPO_NAME=${REPO_NAME} \
    BRANCH=${BRANCH} \
    GITHUB_TOKEN=${GITHUB_TOKEN}

# Convert line endings to Unix-style before running the script
RUN apt-get install -y dos2unix && dos2unix /app/script.sh

# Run the script
RUN /bin/bash /app/script.sh


# Build the application
RUN npm run build

# Define the command to start the application
CMD ["npm", "start"]