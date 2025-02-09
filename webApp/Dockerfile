# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package.json first
COPY webApp/package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React application
COPY webApp/ .

# Build the React application
ARG API_URL
ENV REACT_APP_API_URL=${API_URL}
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built React app
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY webApp/docker/nginx.conf /etc/nginx/conf.d/default.conf

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost:80/health || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]