# Start from a Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files to install dependencies
COPY package*.json ./

# Update packages and install required tools
RUN apt-get update && apt-get install -y \
    git \
    && apt-get clean

# Install project dependencies
RUN npm install

# Install Plasmic CLI globally
RUN npm install -g @plasmicapp/cli

# Define build argument for the repository URL
ARG REPO_URL
ARG BRANCH=main

# Clone the public repository
RUN git clone -b $BRANCH $REPO_URL /app/project

# Set working directory to the cloned repository
WORKDIR /app/project

# Install dependencies for the cloned project
RUN npm install

# Build the application
RUN npm run build

# Define the command to start the application
CMD ["npm", "start"]
