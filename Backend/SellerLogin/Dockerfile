FROM node:latest

WORKDIR /app

COPY . .
RUN apt-get update && \
    apt-get install -y build-essential && \
    npm install

EXPOSE 8050

ENTRYPOINT ["node","server.js"]
