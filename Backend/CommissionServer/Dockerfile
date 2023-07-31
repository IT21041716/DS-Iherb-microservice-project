FROM node:latest

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 8044

ENTRYPOINT ["node","server.js"]
