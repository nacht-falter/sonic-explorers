# Dockerfile.frontend for the React app

FROM node:16

WORKDIR /app

# Copy package.json and package-lock.json (if it exists)
COPY package.json package-lock.json /app/

# Install the frontend dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . /app/

# Build the React app for production
RUN npm run build

EXPOSE 3000

# Serve the app with a static file server (optional, you can use Nginx in production)
CMD ["npm", "start"]
