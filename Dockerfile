# Base image
FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

ENV MYSQL_HOST localhost
ENV MYSQL_PORT 3306
ENV MYSQL_USER didik27
ENV MYSQL_PASS Didik.,.88
ENV MYSQL_NAME db_todo_devcode

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
