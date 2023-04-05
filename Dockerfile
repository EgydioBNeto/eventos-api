FROM node:19-alpine3.16

COPY package*.json

RUN npm instal