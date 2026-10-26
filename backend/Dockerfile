FROM node:23-alpine
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port the Node.js app runs on
EXPOSE 3001

# Start the Node.js application
CMD ["npm", "start"]