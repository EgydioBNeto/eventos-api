# Use the official Node.js image as the base
FROM node:16-alpine

ENV NODE_ENV=production
# Set the working directory for the application
WORKDIR /usr/src/app

# remove root of container
COPY --chown=node:node . /usr/src/app

# Copy the package.json to the working directory
COPY package.json ./

# Install yarn
RUN npm install yarn -g --force

# Install the application dependencies, not install dev dependencies and compact node_modules.
RUN yarn --production --frozen-lockfile

# Copy the entire application source code to the working directory
COPY . .

# Start the application
CMD ["yarn", "start"]
