# Use the official Node.js image as the base
FROM node:16-alpine

# Set the working directory for the application
WORKDIR /usr/src/app

# Copy the package.json to the working directory
COPY package.json ./

# Install yarn
RUN npm install yarn -g --force

# Install the application dependencies
RUN yarn

# Copy the entire application source code to the working directory
COPY . .

# Start the application
CMD ["yarn", "start"]
