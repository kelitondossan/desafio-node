# Etapa de build
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
COPY drizzle.config.ts ./drizzle.config.ts

RUN npm run build

# Etapa de produção
FROM node:18-alpine

WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD [ "node", "dist/server.js" ]
