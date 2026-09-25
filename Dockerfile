FROM node:18-alpine

WORKDIR /app

# Copy dependency definitions and install production packages
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source code
COPY server.js ./
COPY public ./public

# OpenShift Restricted SCC compatibility
RUN chgrp -R 0 /app && chmod -R g=u /app

EXPOSE 8080

ENV PORT=8080
ENV NODE_ENV=production

# Run as non-root user
USER 1001

CMD ["node", "server.js"]