# Use an official Node.js runtime as a parent image
FROM node:18

# Install necessary dependencies for Chromium
RUN apt-get update && apt-get install -y wget curl unzip gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils libxpm4 libxshmfence1 xauth xvfb

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Copy the rest of the backend code to the container
COPY . .

# Install backend dependencies
RUN npm install

# Expose the port your backend runs on
EXPOSE 5001

# Define the command to start your backend
CMD [ "npm", "start" ]