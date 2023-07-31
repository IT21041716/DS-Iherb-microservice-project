FROM node:latest

WORKDIR /app

COPY . .
RUN   npm install

EXPOSE 8040

ENTRYPOINT ["node","server.js"]
