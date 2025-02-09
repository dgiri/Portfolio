# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package.json first
COPY webApp/package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React application
COPY webApp/ .

# Build the React application (Vite)
ARG API_URL
ENV VITE_API_URL=${API_URL}
RUN npm run build

# Debug: Check dist directory (Vite uses 'dist' instead of 'build')
RUN ls -la dist

# Production stage
FROM nginx:alpine

# Copy the built React app from 'dist' directory (Vite default)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY webApp/docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]