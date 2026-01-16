FROM node:22-alpine

WORKDIR /app

# Install dependencies (both prod and dev for build)
COPY package*.json ./
RUN npm ci

# Copy Prisma schema
COPY prisma ./prisma

# Fake DATABASE_URL only for build stage
ARG DATABASE_URL="postgres://user:password@localhost:5432/dummy"
ENV DATABASE_URL=$DATABASE_URL

# Generate Prisma Client
RUN npx prisma generate

# Copy the rest of the code
COPY . .

# Build NestJS
RUN npm run build

EXPOSE 3002

# Run migrations and start the app
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]
