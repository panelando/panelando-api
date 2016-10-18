FROM node:6.4

# Use yarn instead of npm for speed
RUN npm install -g yarn

# Create /app directory
RUN mkdir -p /app
WORKDIR /app

# Install npm dependencies
COPY yarn.lock /app
COPY package.json /app
RUN yarn
