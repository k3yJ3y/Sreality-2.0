# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Copy the rest of the backend code to the container
COPY . .

# Install backend dependencies
RUN npm install

# Expose the port your backend runs on
EXPOSE 5000

# Define the command to start your backend
CMD [ "npm", "start" ]