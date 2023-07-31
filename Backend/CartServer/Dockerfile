FROM node:latest

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 8042

ENTRYPOINT ["node","server.js"]
