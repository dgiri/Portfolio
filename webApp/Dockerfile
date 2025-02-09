# Build stage
FROM node:18-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY webApp/package.json webApp/pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the React application
COPY webApp/ .

# Build the React application
ARG API_URL
ENV REACT_APP_API_URL=${API_URL}
RUN pnpm run build

# Production stage
FROM nginx:alpine

# Copy the built React app
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY webApp/docker/nginx.conf /etc/nginx/conf.d/default.conf

# Add bash for debugging if needed
RUN apk add --no-cache bash

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost:80/health || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]