# Use an official Node.js runtime as a parent image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in package.json
RUN yarn install --production

# Make port 3000 available to the world outside this container
EXPOSE 3113

# Run the app when the container launches
CMD ["node", "src/index.js"]