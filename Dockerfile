# Use official Node.js Alpine image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy source code
COPY src/ ./src/

# Expose port and start app
EXPOSE 8080
CMD ["npm", "start"]
