# Use the latest Node 18 Alpine image (pinned minor version to avoid surprises)
FROM node:18.20-alpine

# Update npm to latest (to fix transitive vulnerabilities in global packages)
RUN npm install -g npm@latest

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json first for better cache
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source code
COPY src/ ./src/

# Expose port
EXPOSE 8080

# Run the application
CMD ["npm", "start"]
