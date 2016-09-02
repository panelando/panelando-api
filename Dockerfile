FROM node:6.4

# Create /app directory
RUN mkdir -p /app
WORKDIR /app

# Install npm dependencies
COPY package.json /app
RUN npm install
