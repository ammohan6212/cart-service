# Use the latest Node 18 Alpine image
FROM node:18.20-alpine

# OPTIONAL: Update npm to latest 10.x if needed
RUN npm install -g npm@10

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install --production

# Copy source code
COPY src/ ./src/

# Expose port and start app
EXPOSE 8080
CMD ["npm", "start"]
