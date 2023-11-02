# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./.next ./.next 
COPY ./src ./src
COPY ./public ./public

# Install application dependencies
RUN npm install

# Copy the rest of application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js app is listening
EXPOSE 3000

# Start your Next.js application
CMD ["npm", "start"]