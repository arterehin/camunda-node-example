FROM node:16.6.0-alpine

WORKDIR /usr/src/backend
COPY package*.json ./

RUN npm install

EXPOSE 4000
CMD ["npm", "run", "watch"]