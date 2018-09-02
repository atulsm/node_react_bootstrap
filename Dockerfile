FROM node:8

# Next we create a directory to hold the application code inside the image,
# This will be the working directory for your application:
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install  # This is giving error, so copying node_modules manually

RUN pwd

# Copy api folder only to image since thats all we need
COPY . .

# server.js exposes 8080 port, so we need that to be exposed
EXPOSE 8080

# run the command to run serverjs
CMD [ "npm", "start" ]
