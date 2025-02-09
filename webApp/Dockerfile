# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Debug: Print working directory
RUN pwd && ls -la

# Copy only package.json first
COPY webApp/package.json ./

# Debug: Check package.json
RUN cat package.json

# Install dependencies
RUN npm install

# Copy the rest of the React application
COPY webApp/ .

# Debug: List files after copy
RUN ls -la

# Build the React application
ARG API_URL
ENV REACT_APP_API_URL=${API_URL}
RUN npm run build || (echo "Build failed" && ls -la && exit 1)

# Debug: Check if build directory exists
RUN ls -la build || echo "Build directory not found"

# Production stage
FROM nginx:alpine

# Copy the built React app
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY webApp/docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]