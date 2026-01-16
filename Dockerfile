FROM node:22-alpine

WORKDIR /app

# Install dependencies (both prod and dev for build)
COPY package*.json ./
RUN npm ci

# Copy Prisma schema
COPY prisma ./prisma
COPY prisma.config.ts ./prisma.config.ts


# Fake DATABASE_URL only for build stage
ARG DATABASE_URL="postgres://user:password@localhost:5432/dummy"
ENV DATABASE_URL=$DATABASE_URL

# Generate Prisma Client
RUN npx prisma generate

# Copy the rest of the code
COPY . .

# Debug: show what files we have
RUN ls -la /app/src/

# Build NestJS with verbose output
RUN npx nest build --debug 2>&1 || true
RUN ls -la /app/ && ls -la /app/dist/ 2>/dev/null || echo "No dist folder"

# Try direct tsc build
RUN npx tsc -p tsconfig.build.json 2>&1 || true
RUN ls -la /app/dist/ 2>/dev/null || echo "Still no dist folder"

# Final check
RUN test -f /app/dist/main.js || (echo "BUILD FAILED" && exit 1)

EXPOSE 3002

# Run migrations and start the app
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]
